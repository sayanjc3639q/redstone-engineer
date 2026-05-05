import React, { useState, useEffect } from 'react';
import { auth, googleProvider, db } from '../firebase';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc, query, orderBy } from 'firebase/firestore';
import { LogIn, LogOut, Plus, Trash2, Edit2, Save, X, ExternalLink, Link as LinkIcon } from 'lucide-react';

const ADMIN_EMAIL = 'jcsayan7@gmail.com';

const AdminDashboard = () => {
  const [user, setUser] = useState(null);
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newLink, setNewLink] = useState({ title: '', url: '', category: 'Documentation' });
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ title: '', url: '', category: '' });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser && currentUser.email === ADMIN_EMAIL) {
        fetchLinks();
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const fetchLinks = async () => {
    const q = query(collection(db, 'links'), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    const linksData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setLinks(linksData);
  };

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const handleLogout = () => signOut(auth);

  const handleAddLink = async (e) => {
    e.preventDefault();
    if (user?.email !== ADMIN_EMAIL) return;
    
    try {
      await addDoc(collection(db, 'links'), {
        ...newLink,
        createdAt: new Date()
      });
      setNewLink({ title: '', url: '', category: 'Documentation' });
      fetchLinks();
    } catch (error) {
      console.error("Error adding link", error);
    }
  };

  const handleDeleteLink = async (id) => {
    if (user?.email !== ADMIN_EMAIL) return;
    if (window.confirm('Delete this link?')) {
      await deleteDoc(doc(db, 'links', id));
      fetchLinks();
    }
  };

  const startEditing = (link) => {
    setEditingId(link.id);
    setEditForm({ title: link.title, url: link.url, category: link.category });
  };

  const handleUpdateLink = async (id) => {
    await updateDoc(doc(db, 'links', id), editForm);
    setEditingId(null);
    fetchLinks();
  };

  if (loading) return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FF4500]"></div>
    </div>
  );

  if (!user || user.email !== ADMIN_EMAIL) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center p-6">
        <div className="max-w-md w-full bg-[#111111] border border-[#FF4500]/20 rounded-2xl p-8 text-center space-y-6">
          <div className="w-20 h-20 bg-[#FF4500]/10 rounded-full flex items-center justify-center mx-auto">
            <LinkIcon className="w-10 h-10 text-[#FF4500]" />
          </div>
          <h1 className="text-3xl font-black text-white uppercase tracking-tighter">Admin Access</h1>
          <p className="text-white/40 text-sm">Please sign in with the authorized administrator account.</p>
          <button 
            onClick={handleLogin}
            className="w-full flex items-center justify-center gap-3 bg-[#FF4500] hover:bg-[#FF4500]/90 text-white font-bold py-4 rounded-xl transition-all active:scale-95"
          >
            <LogIn size={20} />
            Sign in with Google
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-black uppercase tracking-tighter text-[#FF4500]">Link CMS</h1>
            <p className="text-white/40 text-xs mt-1 uppercase tracking-widest">Logged in as {user.email}</p>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-xs uppercase tracking-widest"
          >
            <LogOut size={16} /> Logout
          </button>
        </header>

        {/* Add Link Form */}
        <div className="bg-[#111111] border border-[#FF4500]/20 rounded-2xl p-6 mb-8">
          <h2 className="text-sm font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
            <Plus size={16} className="text-[#FF4500]" /> Add New Link
          </h2>
          <form onSubmit={handleAddLink} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input 
              type="text" 
              placeholder="Title (e.g. Documentation)"
              className="bg-black border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-[#FF4500] outline-none transition-colors"
              value={newLink.title}
              onChange={e => setNewLink({...newLink, title: e.target.value})}
              required
            />
            <input 
              type="url" 
              placeholder="URL (https://...)"
              className="bg-black border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-[#FF4500] outline-none transition-colors"
              value={newLink.url}
              onChange={e => setNewLink({...newLink, url: e.target.value})}
              required
            />
            <div className="flex gap-2">
              <select 
                className="flex-1 bg-black border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-[#FF4500] outline-none transition-colors appearance-none"
                value={newLink.category}
                onChange={e => setNewLink({...newLink, category: e.target.value})}
              >
                <option>Documentation</option>
                <option>System Status</option>
                <option>Privacy Protocol</option>
                <option>Terminal</option>
                <option>Socials</option>
              </select>
              <button type="submit" className="bg-[#FF4500] text-white p-3 rounded-xl hover:bg-[#FF4500]/90 transition-all">
                <Plus size={20} />
              </button>
            </div>
          </form>
        </div>

        {/* Links List */}
        <div className="space-y-4">
          {links.map(link => (
            <div key={link.id} className="bg-[#111111] border border-white/5 rounded-2xl p-4 flex items-center justify-between group hover:border-[#FF4500]/20 transition-all">
              {editingId === link.id ? (
                <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-3 mr-4">
                  <input 
                    className="bg-black border border-[#FF4500]/40 rounded-lg px-3 py-2 text-sm"
                    value={editForm.title}
                    onChange={e => setEditForm({...editForm, title: e.target.value})}
                  />
                  <input 
                    className="bg-black border border-[#FF4500]/40 rounded-lg px-3 py-2 text-sm"
                    value={editForm.url}
                    onChange={e => setEditForm({...editForm, url: e.target.value})}
                  />
                  <select 
                    className="bg-black border border-[#FF4500]/40 rounded-lg px-3 py-2 text-sm"
                    value={editForm.category}
                    onChange={e => setEditForm({...editForm, category: e.target.value})}
                  >
                    <option>Documentation</option>
                    <option>System Status</option>
                    <option>Privacy Protocol</option>
                    <option>Terminal</option>
                    <option>Socials</option>
                  </select>
                </div>
              ) : (
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center">
                    <ExternalLink size={18} className="text-[#FF4500]/60" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm uppercase tracking-wider">{link.title}</h3>
                    <p className="text-white/30 text-[10px] uppercase tracking-widest">{link.category} • {link.url}</p>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-2">
                {editingId === link.id ? (
                  <>
                    <button onClick={() => handleUpdateLink(link.id)} className="p-2 text-green-500 hover:bg-green-500/10 rounded-lg transition-colors">
                      <Save size={18} />
                    </button>
                    <button onClick={() => setEditingId(null)} className="p-2 text-white/40 hover:bg-white/10 rounded-lg transition-colors">
                      <X size={18} />
                    </button>
                  </>
                ) : (
                  <>
                    <button onClick={() => startEditing(link)} className="p-2 text-white/40 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                      <Edit2 size={18} />
                    </button>
                    <button onClick={() => handleDeleteLink(link.id)} className="p-2 text-white/20 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors">
                      <Trash2 size={18} />
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}

          {links.length === 0 && (
            <div className="text-center py-20 border-2 border-dashed border-white/5 rounded-3xl">
              <p className="text-white/20 uppercase tracking-widest text-xs font-bold">No links found in the database.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

import { Briefcase, Camera, CameraIcon, Code, Globe, GraduationCap, Save, UserIcon, X } from "lucide-react";
import React, { useState } from "react";
import UserImage from "../../assets/user/userimage.png";
import { useAuth } from "../../config/AuthContext";
import toast from "react-hot-toast";
import api from "../../config/API";

const EditProfileModal = ({ onClose }) => {
  const { user, setUser } = useAuth();

  const [loading, setLoading] = useState(false);

  const [preview, setPreview] = useState("");

  const [details, setDetails] = useState({
    fullname: user?.fullname,
    email: user?.email,
    phone: user?.phone,
    careerStage: user?.careerStage || "",
    targetRole: user?.targetRole || "",
    degree: user?.degree || "",
    branch: user?.branch || "",
    passout: user?.passout || "",
    github: user?.github || "",
    leetcode: user?.leetcode || "",
    codechef: user?.codechef || "",
    hackerrank: user?.hackerrank || "",
    programmingLanguages: user?.programmingLanguages || [],
  });

  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log("Details before sending to backend : ", details);

      const res = await api.put(import.meta.env.VITE_UPDATE_PROFILE, details);

      console.log("Response Data : ", res.data.data);

      setUser(res.data.data);

      sessionStorage.setItem("IntervaAI", JSON.stringify(res.data.data));

      toast.success(res?.data?.message || "User Data Updated");
    } catch (error) {
      console.log(error?.response?.data?.message || "Unknown Error");
    } finally {
      setLoading(false);
      onClose();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoChange = async (e) => {
    const file = e.target.files[0];

    console.log("File from handle Photo Change : ", file);

    const photoUrl = URL.createObjectURL(file);

    setPreview(photoUrl);

    console.log("Photo URL from handle photo change : ", photoUrl);

    const form_data = new FormData();

    form_data.append("image", file);

    console.log("Form Data that has to be send to backend : ", form_data);

    try {
      const res = await api.patch(import.meta.env.VITE_UPDATE_PHOTO, form_data);

      console.log("Response from handle photo change", res);

      setUser(res.data.data);

      sessionStorage.setItem("IntervaAI", JSON.stringify(res.data.data));

      toast.success(res?.data?.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // <div className="absolute justify-center items-center bg-black/90 max-h-[85vh] w-5xl overflow-y-auto mx-auto p-8 space-y-10 text-white rounded-2xl border border-white/10">
    //   <form onSubmit={handleSave} className="flex flex-col gap-10">
    //     <div
    //       className="absolute top-0 right-0 p-3"
    //       role="button"
    //       onClick={() => onClose()}
    //     >
    //       <X />
    //     </div>
    //     {/* ================= PHOTO ================= */}
    //     <section>
    //       <h2 className="text-xl font-semibold mb-4">Profile Photo</h2>
    //       <div className="rounded-full h-20 w-20 flex p-1 items-center justify-center mb-4 relative">
    //         <img
    //           src={preview || user?.photo?.url || UserImage}
    //           alt="avatar"
    //           className="object-contain rounded-full"
    //         />

    //         <div className="bottom-2 left-[75%] border bg-white p-2 rounded-full group flex gap-3 absolute group">
    //           <label
    //             htmlFor="imageUpload"
    //             className="text-black group-hover:text-indigo-600"
    //           >
    //             <CameraIcon />
    //           </label>
    //           <input
    //             type="file"
    //             id="imageUpload"
    //             className="hidden"
    //             accept="image/*"
    //             onChange={handlePhotoChange}
    //           />
    //         </div>
    //       </div>
    //     </section>
    //     {/* ================= BASIC INFO ================= */}
    //     <section>
    //       <h2 className="text-xl font-semibold mb-4">Basic Information</h2>

    //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    //         <input
    //           type="text"
    //           name="fullname"
    //           value={details.fullname}
    //           onChange={handleChange}
    //           placeholder="Full Name"
    //           className="border text-white p-2 rounded-xl focus:ring focus:ring-indigo-600"
    //           required
    //         />

    //         <input
    //           type="email"
    //           placeholder="Email"
    //           className="border text-white p-2 rounded-xl focus:ring focus:ring-indigo-600"
    //           name="email"
    //           value={details.email}
    //           onChange={handleChange}
    //           required
    //         />

    //         <input
    //           type="tel"
    //           placeholder="Phone Number"
    //           className="border text-white p-2 rounded-xl focus:ring focus:ring-indigo-600"
    //           name="phone"
    //           value={details.phone}
    //           onChange={handleChange}
    //           required
    //         />
    //       </div>
    //     </section>

    //     {/* ================= CAREER ================= */}
    //     <section>
    //       <h2 className="text-xl font-semibold mb-4">Career Preferences</h2>

    //       {/* Current Status */}
    //       <div className="flex gap-6 mb-4">
    //         <label htmlFor="fresher" className="flex items-center gap-2">
    //           <input
    //             type="radio"
    //             id="fresher"
    //             name="careerStage"
    //             value={"fresher"}
    //             checked={details.careerStage === "fresher"}
    //             onChange={handleChange}
    //             required
    //           />
    //           Fresher
    //         </label>

    //         <label className="flex items-center gap-2" htmlFor="student">
    //           <input
    //             type="radio"
    //             name="careerStage"
    //             id="student"
    //             value={"student"}
    //             checked={details.careerStage === "student"}
    //             onChange={handleChange}
    //             required
    //           />
    //           Student
    //         </label>
    //       </div>

    //       <input
    //         type="text"
    //         placeholder="Target Role"
    //         className="border p-2 rounded-xl focus:ring focus:ring-indigo-600"
    //         value={details.targetRole}
    //         disabled
    //       />

    //       <select
    //         className="px-4 py-3 rounded-xl border text-white-800 ml-3 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500"
    //         name="targetRole"
    //         value={details.targetRole}
    //         onChange={handleChange}
    //         required
    //       >
    //         <option value="" className="text-black hover:bg-indigo-400">
    //           Preferred Domain
    //         </option>
    //         <option className="text-black" value="Frontend">
    //           Frontend
    //         </option>
    //         <option className="text-black" value="Backend">
    //           Backend
    //         </option>
    //         <option className="text-black" value="Full Stack">
    //           Full Stack
    //         </option>
    //         <option className="text-black" value="Data Science">
    //           Data Science
    //         </option>
    //       </select>
    //     </section>

    //     {/* ================= EDUCATION ================= */}
    //     <section>
    //       <h2 className="text-xl font-semibold mb-4">Education</h2>

    //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    //         <input
    //           type="text"
    //           placeholder="Degree"
    //           className="border text-white p-2 rounded-xl focus:ring focus:ring-indigo-600"
    //           name="degree"
    //           value={details.degree}
    //           onChange={handleChange}
    //           required
    //         />

    //         <input
    //           type="text"
    //           placeholder="Branch"
    //           className="border text-white p-2 rounded-xl focus:ring focus:ring-indigo-600"
    //           name="branch"
    //           value={details.branch}
    //           onChange={handleChange}
    //           required
    //         />

    //         <input
    //           type="number"
    //           placeholder="Graduation Year"
    //           className="border text-white p-2 rounded-xl focus:ring focus:ring-indigo-600"
    //           name="passout"
    //           value={details.passout}
    //           onChange={handleChange}
    //           required
    //         />
    //       </div>
    //     </section>

    //     {/* ================= CODING PROFILES ================= */}
    //     <section>
    //       <h2 className="text-xl font-semibold mb-4">Coding Profiles</h2>

    //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    //         <input
    //           className="border text-white p-2 rounded-xl focus:ring focus:ring-indigo-600"
    //           placeholder="GitHub URL"
    //           name="github"
    //           value={details.github}
    //           onChange={handleChange}
    //           required
    //         />

    //         <input
    //           className="border text-white p-2 rounded-xl focus:ring focus:ring-indigo-600"
    //           placeholder="LeetCode URL"
    //           name="leetcode"
    //           value={details.leetcode}
    //           onChange={handleChange}
    //           required
    //         />

    //         <input
    //           className="border text-white p-2 rounded-xl focus:ring focus:ring-indigo-600"
    //           placeholder="CodeChef URL (optional)"
    //           name="codechef"
    //           value={details.codechef}
    //           onChange={handleChange}
    //         />

    //         <input
    //           className="border text-white p-2 rounded-xl focus:ring focus:ring-indigo-600"
    //           placeholder="HackerRank URL (optional)"
    //           name="hackerrank"
    //           value={details.hackerrank}
    //           onChange={handleChange}
    //         />
    //       </div>
    //     </section>

    //     {/* ================= PROGRAMMING LANGUAGES ================= */}
    //     <section>
    //       <h2 className="text-xl font-semibold mb-4">Programming Languages</h2>

    //       <div className="flex flex-wrap gap-4">
    //         <input
    //           className="border text-white p-2 rounded-xl focus:ring focus:ring-indigo-600 w-full"
    //           placeholder="Enter known programming languages separated with commas(,)"
    //           name="programmingLanguages"
    //           value={details.programmingLanguages}
    //           onChange={(e) =>
    //             setDetails((prev) => ({
    //               ...prev,
    //               [e.target.name]: e.target.value
    //                 .split(",")
    //                 .map(l => l.trim()),
    //             }))
    //           }
    //           required
    //         />
    //       </div>
    //     </section>

    //     {/* ================= PREFERENCES ================= */}
    //     {/* <section>
    //       <h2 className="text-xl font-semibold mb-4">Learning Preferences</h2>

    //       <input
    //         className="border text-white p-2 rounded-xl focus:ring focus:ring-indigo-600 mb-3"
    //         placeholder="Learning Goal"
    //       />

    //       <select className="input mb-3">
    //         <option value="">Preferred Practice Time</option>
    //         <option>Morning</option>
    //         <option>Night</option>
    //       </select>

    //       <select className="input">
    //         <option>Adaptive</option>
    //         <option>Easy</option>
    //         <option>Hard</option>
    //       </select>
    //     </section> */}

    //     {/* ================= SUBMIT ================= */}
    //     <button
    //       type="submit"
    //       className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition font-semibold"
    //     >
    //       {loading ? "Updating..." : "Update Changes"}
    //     </button>
    //   </form>
    // </div>
    <>
    <div className="fixed inset-0 z-999 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl h-[90vh] bg-slate-900 border border-slate-800 shadow-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row animate-in zoom-in-95 duration-300">
        
        {/* 1. Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white transition-all"
        >
          <X size={20} />
        </button>

        {/* 2. Sidebar (Sections List - Desktop Only) */}
        <div className="hidden md:flex w-64 bg-slate-950 border-r border-slate-800 p-8 flex-col gap-6">
          <div className="mb-4">
            <h2 className="text-xl font-black text-white tracking-tight">Settings</h2>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Update your identity</p>
            <h2 className={`text-sm font-semibold ${user.premium?"text-amber-400":"text-white"} tracking-tight`}>{user.premium? "Premium User" : "Free User"}</h2>
          </div>
          
          <nav className="space-y-2">
            {[
              { label: 'Basic Info', icon: UserIcon },
              { label: 'Career', icon: Briefcase },
              { label: 'Education', icon: GraduationCap },
              { label: 'Profiles', icon: Globe },
              { label: 'Languages', icon: Code },
            ].map((item, i) => (
              <div key={i} className={`flex items-center gap-3 px-4 py-2 rounded-xl text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer ${i === 0 ? 'bg-indigo-500/10 text-indigo-400' : 'text-slate-500 hover:text-slate-300'}`}>
                <item.icon size={16} />
                {item.label}
              </div>
            ))}
          </nav>
        </div>

        {/* 3. Main Content (Form) */}
        <div className="flex-1 overflow-y-auto custom-scrollbar bg-slate-900/50">
          <form onSubmit={handleSave} className="p-8 md:p-12 space-y-12 pb-24">
            
            {/* ================= PHOTO SECTION ================= */}
            <section className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative group">
                <div className="w-24 h-24 rounded-3xl overflow-hidden border-2 border-slate-700 p-1 bg-slate-800 transition-all group-hover:border-indigo-500">
                  <img
                    src={preview || user?.photo?.url}
                    alt="avatar"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <label 
                  htmlFor="imageUpload" 
                  className="absolute -bottom-2 -right-2 p-2 bg-indigo-600 rounded-xl cursor-pointer shadow-lg hover:bg-indigo-500 transition-all border border-indigo-400/50"
                >
                  <Camera size={16} className="text-white" />
                  <input
                    type="file"
                    id="imageUpload"
                    className="hidden"
                    accept="image/*"
                    onChange={handlePhotoChange}
                  />
                </label>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-white font-bold">Profile Picture</h3>
                <p className="text-[11px] text-slate-500 font-medium max-w-xs mt-1">
                  JPG, GIF or PNG. Recommended size 400x400.
                </p>
              </div>
            </section>

            {/* ================= BASIC INFO ================= */}
            <section className="space-y-6">
              <SectionTitle title="Basic Information" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <InputGroup label="Full Name" name="fullname" value={details.fullname} onChange={handleChange} placeholder="Tanishk Sarathe" />
                <InputGroup label="Email Address" type="email" name="email" value={details.email} onChange={handleChange} placeholder="email@example.com" />
                <InputGroup label="Phone Number" type="tel" name="phone" value={details.phone} onChange={handleChange} placeholder="+91 7869..." />
              </div>
            </section>

            {/* ================= CAREER STAGE ================= */}
            <section className="space-y-6">
              <SectionTitle title="Career Details" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Custom Radio Buttons */}
                <div className="flex gap-3">
                  {['fresher', 'student'].map((stage) => (
                    <label key={stage} className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border cursor-pointer transition-all ${details.careerStage === stage ? 'bg-indigo-500/10 border-indigo-500 text-indigo-400' : 'bg-slate-800/50 border-slate-700 text-slate-500 hover:border-slate-600'}`}>
                      <input type="radio" name="careerStage" value={stage} checked={details.careerStage === stage} onChange={handleChange} className="hidden" />
                      <span className="text-[10px] font-black uppercase tracking-widest">{stage}</span>
                    </label>
                  ))}
                </div>

                <div className="flex flex-col gap-2">
                   <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.15em] ml-1">Target Role</label>
                   <select
                    className="bg-slate-800/50 border border-slate-700 text-slate-200 px-4 py-3 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
                    name="targetRole"
                    value={details.targetRole}
                    onChange={handleChange}
                    required
                  >
                    <option value="" className="bg-slate-900">Preferred Domain</option>
                    <option value="Frontend" className="bg-slate-900">Frontend</option>
                    <option value="Backend" className="bg-slate-900">Backend</option>
                    <option value="Full Stack" className="bg-slate-900">Full Stack</option>
                    <option value="Data Science" className="bg-slate-900">Data Science</option>
                  </select>
                </div>
              </div>
            </section>

            {/* ================= EDUCATION ================= */}
            <section className="space-y-6">
              <SectionTitle title="Academic Background" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <InputGroup label="Degree" name="degree" value={details.degree} onChange={handleChange} placeholder="B.Tech" />
                <InputGroup label="Specialization" name="branch" value={details.branch} onChange={handleChange} placeholder="CSE" />
                <InputGroup label="Passout Year" type="number" name="passout" value={details.passout} onChange={handleChange} placeholder="2026" />
              </div>
            </section>

            {/* ================= CODING PROFILES ================= */}
            <section className="space-y-6">
              <SectionTitle title="Professional Links" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <InputGroup label="GitHub" name="github" value={details.github} onChange={handleChange} placeholder="github.com/..." />
                <InputGroup label="LeetCode" name="leetcode" value={details.leetcode} onChange={handleChange} placeholder="leetcode.com/..." />
                <InputGroup label="CodeChef" name="codechef" value={details.codechef} onChange={handleChange} placeholder="Optional" />
                <InputGroup label="HackerRank" name="hackerrank" value={details.hackerrank} onChange={handleChange} placeholder="Optional" />
              </div>
            </section>

            {/* ================= LANGUAGES ================= */}
            <section className="space-y-6 pb-12">
              <SectionTitle title="Programming Languages" />
              <div className="flex flex-col gap-2">
                 <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.15em] ml-1">Stack (Separated by commas)</label>
                 <textarea
                  className="bg-slate-800/50 border border-slate-700 text-slate-200 px-4 py-3 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all w-full min-h-[80px]"
                  placeholder="Java, C++, Python, JavaScript..."
                  name="programmingLanguages"
                  value={details.programmingLanguages.join(", ")}
                  onChange={(e) =>
                    setDetails((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value.split(",").map(l => l.trim()),
                    }))
                  }
                  required
                />
              </div>
            </section>

            {/* ================= FLOATING FOOTER ================= */}
            <div className="absolute bottom-0 left-0 md:left-64 right-0 p-6 bg-slate-900/90 backdrop-blur-md border-t border-slate-800 flex justify-end items-center gap-4 z-10">
              <button 
                type="button" 
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-300 transition-all"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex items-center gap-2 px-8 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-[11px] font-black uppercase tracking-[0.15em] transition-all shadow-lg shadow-indigo-900/20 active:scale-95"
              >
                {loading ? "Syncing Data..." : (
                  <>
                    <Save size={14} />
                    Push Changes
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

const SectionTitle = ({ title }) => (
  <h4 className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.3em] border-l-2 border-indigo-500 pl-3">
    {title}
  </h4>
);

const InputGroup = ({ label, type = "text", ...props }) => (
  <div className="flex flex-col gap-2 group">
    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.15em] ml-1 group-focus-within:text-indigo-400 transition-colors">
      {label}
    </label>
    <input
      type={type}
      className="bg-slate-800/50 border border-slate-700 text-slate-200 px-4 py-2.5 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-600"
      {...props}
    />
  </div>
);

export default EditProfileModal;

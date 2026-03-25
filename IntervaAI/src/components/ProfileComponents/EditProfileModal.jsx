import { CameraIcon, X } from "lucide-react";
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
    <div className="absolute justify-center items-center bg-black/90 max-h-[85vh] w-5xl overflow-y-auto mx-auto p-8 space-y-10 text-white rounded-2xl border border-white/10">
      <form onSubmit={handleSave} className="flex flex-col gap-10">
        <div
          className="absolute top-0 right-0 p-3"
          role="button"
          onClick={() => onClose()}
        >
          <X />
        </div>
        {/* ================= PHOTO ================= */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Profile Photo</h2>
          <div className="rounded-full h-20 w-20 flex p-1 items-center justify-center mb-4 relative">
            <img
              src={preview || user?.photo?.url || UserImage}
              alt="avatar"
              className="object-contain rounded-full"
            />

            <div className="bottom-2 left-[75%] border bg-white p-2 rounded-full group flex gap-3 absolute group">
              <label
                htmlFor="imageUpload"
                className="text-black group-hover:text-indigo-600"
              >
                <CameraIcon />
              </label>
              <input
                type="file"
                id="imageUpload"
                className="hidden"
                accept="image/*"
                onChange={handlePhotoChange}
              />
            </div>
          </div>
        </section>
        {/* ================= BASIC INFO ================= */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Basic Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="fullname"
              value={details.fullname}
              onChange={handleChange}
              placeholder="Full Name"
              className="border text-white p-2 rounded-xl focus:ring focus:ring-indigo-600"
              required
            />

            <input
              type="email"
              placeholder="Email"
              className="border text-white p-2 rounded-xl focus:ring focus:ring-indigo-600"
              name="email"
              value={details.email}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="border text-white p-2 rounded-xl focus:ring focus:ring-indigo-600"
              name="phone"
              value={details.phone}
              onChange={handleChange}
              required
            />
          </div>
        </section>

        {/* ================= CAREER ================= */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Career Preferences</h2>

          {/* Current Status */}
          <div className="flex gap-6 mb-4">
            <label htmlFor="fresher" className="flex items-center gap-2">
              <input
                type="radio"
                id="fresher"
                name="careerStage"
                value={"fresher"}
                checked={details.careerStage === "fresher"}
                onChange={handleChange}
                required
              />
              Fresher
            </label>

            <label className="flex items-center gap-2" htmlFor="student">
              <input
                type="radio"
                name="careerStage"
                id="student"
                value={"student"}
                checked={details.careerStage === "student"}
                onChange={handleChange}
                required
              />
              Student
            </label>
          </div>

          <input
            type="text"
            placeholder="Target Role"
            className="border p-2 rounded-xl focus:ring focus:ring-indigo-600"
            value={details.targetRole}
            disabled
          />

          <select
            className="px-4 py-3 rounded-xl border text-white-800 ml-3 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500"
            name="targetRole"
            value={details.targetRole}
            onChange={handleChange}
            required
          >
            <option value="" className="text-black hover:bg-indigo-400">
              Preferred Domain
            </option>
            <option className="text-black" value="Frontend">
              Frontend
            </option>
            <option className="text-black" value="Backend">
              Backend
            </option>
            <option className="text-black" value="Full Stack">
              Full Stack
            </option>
            <option className="text-black" value="Data Science">
              Data Science
            </option>
          </select>
        </section>

        {/* ================= EDUCATION ================= */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Education</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Degree"
              className="border text-white p-2 rounded-xl focus:ring focus:ring-indigo-600"
              name="degree"
              value={details.degree}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              placeholder="Branch"
              className="border text-white p-2 rounded-xl focus:ring focus:ring-indigo-600"
              name="branch"
              value={details.branch}
              onChange={handleChange}
              required
            />

            <input
              type="number"
              placeholder="Graduation Year"
              className="border text-white p-2 rounded-xl focus:ring focus:ring-indigo-600"
              name="passout"
              value={details.passout}
              onChange={handleChange}
              required
            />
          </div>
        </section>

        {/* ================= CODING PROFILES ================= */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Coding Profiles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              className="border text-white p-2 rounded-xl focus:ring focus:ring-indigo-600"
              placeholder="GitHub URL"
              name="github"
              value={details.github}
              onChange={handleChange}
              required
            />

            <input
              className="border text-white p-2 rounded-xl focus:ring focus:ring-indigo-600"
              placeholder="LeetCode URL"
              name="leetcode"
              value={details.leetcode}
              onChange={handleChange}
              required
            />

            <input
              className="border text-white p-2 rounded-xl focus:ring focus:ring-indigo-600"
              placeholder="CodeChef URL (optional)"
              name="codechef"
              value={details.codechef}
              onChange={handleChange}
            />

            <input
              className="border text-white p-2 rounded-xl focus:ring focus:ring-indigo-600"
              placeholder="HackerRank URL (optional)"
              name="hackerrank"
              value={details.hackerrank}
              onChange={handleChange}
            />
          </div>
        </section>

        {/* ================= PROGRAMMING LANGUAGES ================= */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Programming Languages</h2>

          <div className="flex flex-wrap gap-4">
            <input
              className="border text-white p-2 rounded-xl focus:ring focus:ring-indigo-600 w-full"
              placeholder="Enter known programming languages separated with commas(,)"
              name="programmingLanguages"
              value={details.programmingLanguages}
              onChange={(e) =>
                setDetails((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value
                    .split(",")
                    .map(l => l.trim()),
                }))
              }
              required
            />
          </div>
        </section>

        {/* ================= PREFERENCES ================= */}
        {/* <section>
          <h2 className="text-xl font-semibold mb-4">Learning Preferences</h2>

          <input
            className="border text-white p-2 rounded-xl focus:ring focus:ring-indigo-600 mb-3"
            placeholder="Learning Goal"
          />

          <select className="input mb-3">
            <option value="">Preferred Practice Time</option>
            <option>Morning</option>
            <option>Night</option>
          </select>

          <select className="input">
            <option>Adaptive</option>
            <option>Easy</option>
            <option>Hard</option>
          </select>
        </section> */}

        {/* ================= SUBMIT ================= */}
        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition font-semibold"
        >
          {loading ? "Updating..." : "Update Changes"}
        </button>
      </form>
    </div>
  );
};

export default EditProfileModal;

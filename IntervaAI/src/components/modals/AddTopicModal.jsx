import { BookOpen, PlusCircle, Trash2, X } from 'lucide-react'
import React from 'react'

const AddTopicModal = ({onClose}) => {

  return (
    <>
    <div className="fixed bg-black/80 inset-0 flex items-center justify-center overflow-y-auto text-white">
      <div className="max-w-5xl mx-auto space-y-10 flex gap-4 overflow-y-scroll h-[85vh]">
        <button
        onClose={() => onClose()}
        className='absolute top-0 right-0'
        >
        <X color='white'/>
        </button>
        {/* ================= META SECTION ================= */}
        <section className="bg-slate-900 rounded-2xl p-6 shadow-lg border border-slate-800 text-white">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-400" />
            Topic Meta Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              placeholder="Unique Topic ID (e.g. programming-basics)"
              className="text-white rounded-md p-2 border"
            />
            <input
              placeholder="Title"
              className="text-white rounded-md p-2 border"
            />
            <input
              placeholder="Topic Category (e.g. Fundamentals)"
              className="text-white rounded-md p-2 border"
            />

            <select className="text-white rounded-md p-2 border">
              <option>Difficulty</option>
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>

            <input
              placeholder="Learning Time (e.g. 30-40 mins)"
              className="text-white rounded-md p-2 border"
            />

            <textarea
              placeholder="Detailed explanation of the topic"
              rows={4}
              className="input md:col-span-2 text-white rounded-md p-2 border"
            />
          </div>
        </section>

        {/* ================= SECTIONS ================= */}
        <div className='flex flex-col gap-2 overflow-y-auto'>

            <section className="space-y-6">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <PlusCircle className="w-5 h-5 text-green-400" />
            Topic Sections
          </h2>

          {/* ===== SECTION CARD ===== */}
          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-4 transition hover:border-indigo-500">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg">Section</h3>
              <Trash2 className="w-4 h-4 text-red-400 cursor-pointer" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input placeholder="Section ID" className="text-white rounded-md p-2 border" />

              <select className="input text-black bg-white rounded-md p-2 border">
                <option>Section Type</option>
                <option>text</option>
                <option>concept</option>
                <option>example</option>
                <option>intuition</option>
                <option>usecase</option>
                <option>mistakes</option>
                <option>interview</option>
                <option>summary</option>
              </select>

              <input
                placeholder="Section Title"
                className="input md:col-span-2 text-white rounded-md p-2 border"
              />

              <textarea
                placeholder="Section Content"
                rows={5}
                className="input md:col-span-2 text-white rounded-md p-2 border"
              />
            </div>

            {/* Optional Enhancements */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
              <select className="input text-white rounded-md p-2 border">
                <option>Icon</option>
                <option>Cpu</option>
                <option>GitBranch</option>
                <option>Globe</option>
                <option>AlertTriangle</option>
                <option>MessageSquare</option>
              </select>

              <input
                placeholder="Highlight class (optional)"
                className="text-white rounded-md p-2 border"
              />

              <input
                placeholder="Extra Action Label (optional)"
                className="text-white rounded-md p-2 border"
              />

              <input
                placeholder="Extra Action Key (optional)"
                className="input md:col-span-2 text-white rounded-md p-2 border"
              />
            </div>
          </div>

        </section>
        <div className="flex justify-end">
          <button className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition font-medium shadow-lg">
            Save Topic
          </button>
        </div>
        

        </div>
        {/* ================= SUBMIT ================= */}
        
      </div>

      {/* Tailwind utility */}
      <style jsx>{`
        .input {
          @apply bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition;
        }
      `}</style>
    </div>
    </>
  )
}

export default AddTopicModal

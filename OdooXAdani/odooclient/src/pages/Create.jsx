import { useState } from "react";

export default function CreateRequest() {
  const [form, setForm] = useState({
    equipment: "",
    subject: "",
    type: "",
    priority: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.equipment ||
      !form.subject ||
      !form.type ||
      !form.priority ||
      !form.description
    ) {
      alert("Fill all fields");
      return;
    }

    console.log("REQUEST CREATED ✅", form);
    alert("Maintenance request created");

    setForm({
      equipment: "",
      subject: "",
      type: "",
      priority: "",
      description: "",
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex justify-center items-start py-14">
      <div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
        
        <h1 className="text-3xl font-bold mb-6 text-emerald-400">
          Create Maintenance Request
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Equipment */}
          <div>
            <label className="block text-sm mb-1 text-slate-400">Equipment</label>
            <input
              name="equipment"
              value={form.equipment}
              onChange={handleChange}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2"
              placeholder="e.g. Dell Server R750"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm mb-1 text-slate-400">Subject</label>
            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2"
              placeholder="Issue title"
            />
          </div>

          {/* Type */}
          <div>
            <label className="block text-sm mb-1 text-slate-400">Request Type</label>
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2"
            >
              <option value="">Select</option>
              <option value="Corrective">Corrective</option>
              <option value="Preventive">Preventive</option>
            </select>
          </div>

          {/* Priority */}
          <div>
            <label className="block text-sm mb-1 text-slate-400">Priority</label>
            <select
              name="priority"
              value={form.priority}
              onChange={handleChange}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2"
            >
              <option value="">Select</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm mb-1 text-slate-400">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows="4"
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2"
              placeholder="Describe the issue"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 transition rounded-xl py-3 font-bold text-lg"
          >
            Create Request
          </button>
        </form>
      </div>
    </div>
  );
}

import { IconFilter } from "@tabler/icons-react";

export const DentistFilterView = () => {
  return (
    <>
      <div className="flex items-center gap-2">
        <select
          defaultValue="all"
          className="select select-bordered select-sm max-w-xs font-semibold"
        >
          <option value="all">All Dentist</option>
          <option value="hans_solo">Han Solo</option>
          <option value="greedo">Greedo</option>
        </select>
        <button className="btn btn-ghost btn-sm border-base-300 font-semibold">
          <div className="indicator">
            <span className="badge indicator-item badge-secondary badge-xs"></span>
            <IconFilter className="grid place-items-center" size={15} />
          </div>
          Filters
        </button>
      </div>
    </>
  );
};

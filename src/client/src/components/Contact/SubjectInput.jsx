import React from 'react';

const SubjectInput = ({ onSubjectChange, subject }) => {
  return (
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
          Subject
        </label>
        <input value={subject} onChange={(event) => onSubjectChange(event)} className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 resize-none" id="message"></input>
        {/* <p className="text-gray-600 text-xs italic">Re-size can be disabled by set by resize-none / resize-y / resize-x / resize</p> */}
      </div>
    </div>
  );
};

export default SubjectInput;
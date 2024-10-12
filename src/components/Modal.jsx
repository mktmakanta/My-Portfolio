import { NavLink } from "react-router-dom";

const Modal = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
        <h2 className="text-lg font-semibold mb-4">{message}</h2>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-violet-500 text-white rounded hover:bg-violet-600 shadow-md transition duration-200"
        >
          <NavLink to="/">Go Home</NavLink>
        </button>
      </div>
    </div>
  );
};

export default Modal;

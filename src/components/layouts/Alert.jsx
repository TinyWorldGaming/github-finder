import { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";

function Alert() {
  const { alert } = useContext(AlertContext);
  return (
    alert !== null && (
      <p className="flex items-start mb-4 space-x-2">
        {alert.type === "error" && (
          <svg
            t="1656729811110"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2451"
            width="32"
            height="32"
          >
            <path
              d="M512 720m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0Z"
              p-id="2452"
              fill="#d81e06"
            ></path>
            <path
              d="M480 416v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8z"
              p-id="2453"
              fill="#d81e06"
            ></path>
            <path
              d="M955.7 856l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48z m-783.5-27.9L512 239.9l339.8 588.2H172.2z"
              p-id="2454"
              fill="#d81e06"
            ></path>
          </svg>
        )}
        <p className="flex-1 text-base font-semibold leading-7">
          <strong>{alert.msg}</strong>
        </p>
      </p>
    )
  );
}

export default Alert;

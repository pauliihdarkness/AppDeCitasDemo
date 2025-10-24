import { useRef, useEffect } from "react";

function CopyProtectedText() {
  const textRef = useRef(null);

  useEffect(() => {
    const handleCopy = (event) => {
      event.preventDefault();
      event.clipboardData.setData(
        "text/plain",
        "DONDE CREES QUE VAS PILLINI\n"
      );
    };

    const element = textRef.current;
    if (element) element.addEventListener("copy", handleCopy);

    return () => {
      if (element) element.removeEventListener("copy", handleCopy);
    };
  }, []);

  return (
    <div ref={textRef} style={{ userSelect: "text" }}>
      <p>
        Este texto parece inocente, pero si lo copiáste… te vas a llevar una sorpresa 😏
      </p>
    </div>
  );
}

export default CopyProtectedText;
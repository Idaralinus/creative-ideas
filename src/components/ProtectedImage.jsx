export default function ProtectedImage({
  src,
  alt,
  className = "",
}) {
  const preventSave = (e) => {
    e.preventDefault();
  };

  return (
    <img
      src={src}
      alt={alt}
      className={`select-none ${className}`}
      draggable="false"
      onContextMenu={preventSave}
      onDragStart={preventSave}
    />
  );
}
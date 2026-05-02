import { X } from 'lucide-react';

export default function VideoModal({ video, onClose }) {
  if (!video) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-inner" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><X size={28} /></button>
        <iframe
          className="modal-iframe"
          src={video.video_url}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <div className="modal-info">
          <div style={{ fontWeight: 600, fontSize: '1rem', marginBottom: 4 }}>{video.title}</div>
          <div style={{ fontSize: '0.85rem', color: 'rgba(26,26,26,0.6)' }}>{video.description}</div>
        </div>
      </div>
    </div>
  );
}

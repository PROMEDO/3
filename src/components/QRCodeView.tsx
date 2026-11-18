/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode';
import { Download, Copy, Check, Printer } from 'lucide-react';

interface QRCodeViewProps {
  url: string;
  restaurantName?: string;
  size?: number;
}

export const QRCodeView: React.FC<QRCodeViewProps> = ({
  url,
  restaurantName = 'مشروعي',
  size = 220,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [dataUrl, setDataUrl] = useState<string>('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!url) return;
    QRCode.toDataURL(
      url,
      {
        width: size * 2,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#ffffff',
        },
        errorCorrectionLevel: 'H',
      },
      (err, resUrl) => {
        if (!err && resUrl) {
          setDataUrl(resUrl);
        }
      }
    );

    if (canvasRef.current) {
      QRCode.toCanvas(
        canvasRef.current,
        url,
        {
          width: size,
          margin: 1,
          color: {
            dark: '#0f172a',
            light: '#ffffff',
          },
          errorCorrectionLevel: 'H',
        },
        () => {}
      );
    }
  }, [url, size]);

  const handleDownload = async (format: 'png' | 'svg') => {
    const safeName = `QR-${restaurantName.replace(/\s+/g, '-')}.${format}`;
    if (format === 'svg') {
      try {
        const svgStr = await QRCode.toString(url, {
          type: 'svg',
          width: size * 2,
          margin: 2,
          color: { dark: '#000000', light: '#ffffff' },
          errorCorrectionLevel: 'H',
        });
        const blob = new Blob([svgStr], { type: 'image/svg+xml;charset=utf-8' });
        const blobUrl = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = safeName;
        a.click();
        URL.revokeObjectURL(blobUrl);
      } catch {
        // ignore download error
      }
      return;
    }
    if (!dataUrl) return;
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = safeName;
    a.click();
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const handlePrint = () => {
    document.body.classList.add('printing-active');
    const cleanup = () => {
      document.body.classList.remove('printing-active');
      window.removeEventListener('afterprint', cleanup);
    };
    window.addEventListener('afterprint', cleanup);
    setTimeout(() => {
      window.print();
      setTimeout(cleanup, 1200);
    }, 60);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
      {dataUrl && (
        <div className="print-only-sheet" dir="rtl" style={{ textAlign: 'center' }}>
          <div
            style={{
              border: '3px solid #111111',
              borderRadius: '24px',
              padding: '32px 24px',
              maxWidth: '380px',
              margin: '40px auto',
              background: '#ffffff',
              color: '#111111',
            }}
          >
            <h1 style={{ fontSize: '24px', marginBottom: '8px', color: '#111111' }}>{restaurantName}</h1>
            <p style={{ fontSize: '15px', color: '#555555', marginBottom: '20px' }}>
              امسح الكود بالكاميرا لتصفح قائمة الطعام والطلب مباشرة
            </p>
            <img src={dataUrl} alt="QR Code" style={{ width: '260px', height: '260px', margin: '0 auto', display: 'block' }} />
            <div style={{ marginTop: '18px', fontWeight: 'bold', fontSize: '14px', color: '#111111' }}>
              امسح للطلب 📱
            </div>
          </div>
        </div>
      )}
      <canvas
        ref={canvasRef}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: '8px',
          display: 'block',
        }}
      />
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <button
          type="button"
          onClick={() => handleDownload('png')}
          className="btn p"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '13px',
            padding: '8px 16px',
            borderRadius: '12px',
            cursor: 'pointer',
            fontWeight: 700,
          }}
        >
          <Download size={15} />
          تحميل PNG
        </button>
        <button
          type="button"
          onClick={handlePrint}
          className="btn"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '13px',
            padding: '8px 16px',
            background: 'var(--surface)',
            color: 'var(--ink)',
            borderRadius: '12px',
            border: '1px solid var(--line)',
            cursor: 'pointer',
            fontWeight: 600,
          }}
        >
          <Printer size={15} />
          طباعة للستاند
        </button>
        <button
          type="button"
          onClick={handleCopy}
          className="btn"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '13px',
            padding: '8px 16px',
            background: 'var(--surface)',
            color: 'var(--ink)',
            borderRadius: '12px',
            border: '1px solid var(--line)',
            cursor: 'pointer',
            fontWeight: 600,
          }}
        >
          {copied ? <Check size={15} color="var(--brand-ink, var(--brand))" /> : <Copy size={15} />}
          {copied ? 'تم النسخ' : 'نسخ الرابط'}
        </button>
      </div>
    </div>
  );
};

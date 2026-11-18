/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Check, Copy, CreditCard, MessageCircle, Smartphone, Sparkles, X } from 'lucide-react';
import { PricingPlan, SiteSettings } from '../types';
import { copyTextReliable, waLink } from '../utils/storage';

interface PlanPurchaseModalProps {
  isOpen: boolean;
  plan: PricingPlan | null;
  site: SiteSettings;
  billingCycle?: 'monthly' | 'annual';
  restaurantName?: string;
  onClose: () => void;
}

export const PlanPurchaseModal: React.FC<PlanPurchaseModalProps> = ({
  isOpen,
  plan,
  site,
  billingCycle = 'monthly',
  restaurantName,
  onClose,
}) => {
  const [copiedKey, setCopiedKey] = useState<'zain' | 'qi' | null>(null);

  if (!isOpen || !plan) return null;

  const isAnnual = billingCycle === 'annual';
  const priceValue = isAnnual
    ? Number(plan.annualPr || Math.round((Number(plan.pr) || 0) * 11))
    : Number(plan.pr || 0);
  const zainCashAccount = String(site.zainCashNumber || site.supportWhatsapp || site.wa || '07724799679').trim();
  const qiCardAccount = String(site.qiCardNumber || '5284 7100 3920 1188').trim();
  const supportPhone = String(site.supportWhatsapp || site.wa || '07724799679').trim();

  const handleCopy = async (val: string, key: 'zain' | 'qi') => {
    const ok = await copyTextReliable(val);
    if (ok) {
      setCopiedKey(key);
      setTimeout(() => setCopiedKey((prev) => (prev === key ? null : prev)), 2200);
    }
  };

  const whatsappMessage = [
    `مرحباً فريق منيو بلس، أرغب بالاشتراك وتفعيل باقة "${plan.n}".`,
    restaurantName ? `اسم المشروع: ${restaurantName}` : '',
    `دورة الفوترة: ${isAnnual ? 'سنوي (11 شهر + شهر مجاني)' : 'شهري'}`,
    priceValue > 0 ? `المبلغ المطلوب: ${priceValue.toLocaleString('en-US')} د.ع` : '',
    'سأقوم بتحويل المبلغ عبر زين كاش / كي كارد وإرسال وصل الدفع لتفعيل الباقة.',
  ]
    .filter(Boolean)
    .join('\n');

  return (
    <div
      className="ajax-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={`شراء وتفعيل ${plan.n}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="ajax-box"
        style={{
          maxWidth: '460px',
          textAlign: 'start',
          padding: '20px',
          borderRadius: '18px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '10px',
            marginBottom: '12px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
            <span
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '10px',
                background: 'var(--soft)',
                color: 'var(--brand)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Sparkles size={17} />
            </span>
            <div style={{ minWidth: 0 }}>
              <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 800 }}>شراء وتفعيل الباقة</h3>
              <div className="muted" style={{ fontSize: '12px' }}>
                {plan.n}
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="إغلاق"
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              border: '1px solid var(--line)',
              background: 'var(--surface)',
              color: 'var(--muted)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Plan Price Summary */}
        <div
          style={{
            padding: '12px 14px',
            borderRadius: '12px',
            border: '1px solid color-mix(in srgb, var(--brand) 32%, var(--line))',
            background: 'var(--soft)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '10px',
            marginBottom: '14px',
          }}
        >
          <div>
            <div style={{ fontWeight: 800, fontSize: '14px' }}>{plan.n}</div>
            <div className="muted" style={{ fontSize: '11.5px' }}>
              {isAnnual ? 'اشتراك سنوي (توفير شهر كامل مجاناً)' : 'اشتراك شهري قابل للتجديد'}
            </div>
          </div>
          <div style={{ fontWeight: 900, fontSize: '18px', color: 'var(--brand)' }} className="tabular-nums">
            {priceValue > 0 ? `${priceValue.toLocaleString('en-US')} د.ع` : 'مجاناً'}
          </div>
        </div>

        {/* ZainCash & QiCard Details */}
        <div style={{ fontSize: '12.5px', fontWeight: 800, marginBottom: '8px' }}>
          طرق الدفع المتوفرة (العراق)
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '14px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '10px',
              padding: '10px 12px',
              borderRadius: '11px',
              border: '1px solid var(--line)',
              background: 'var(--surface)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '9px', minWidth: 0 }}>
              <span
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '9px',
                  background: 'rgba(16, 185, 129, 0.14)',
                  color: '#10b981',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Smartphone size={16} />
              </span>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontWeight: 800, fontSize: '13px' }}>زين كاش (ZainCash)</div>
                <div dir="ltr" className="tabular-nums" style={{ fontSize: '12.5px', color: 'var(--muted)' }}>
                  {zainCashAccount}
                </div>
              </div>
            </div>
            <button
              type="button"
              className="btn s"
              onClick={() => void handleCopy(zainCashAccount, 'zain')}
              style={{ minHeight: '32px', padding: '4px 10px', fontSize: '12px' }}
            >
              {copiedKey === 'zain' ? <Check size={13} /> : <Copy size={13} />}
              <span>{copiedKey === 'zain' ? 'تم النسخ' : 'نسخ'}</span>
            </button>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '10px',
              padding: '10px 12px',
              borderRadius: '11px',
              border: '1px solid var(--line)',
              background: 'var(--surface)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '9px', minWidth: 0 }}>
              <span
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '9px',
                  background: 'rgba(245, 158, 11, 0.15)',
                  color: '#d97706',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <CreditCard size={16} />
              </span>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontWeight: 800, fontSize: '13px' }}>كي كارد / ماستركارد الرافدين (QiCard)</div>
                <div dir="ltr" className="tabular-nums" style={{ fontSize: '12.5px', color: 'var(--muted)' }}>
                  {qiCardAccount}
                </div>
              </div>
            </div>
            <button
              type="button"
              className="btn s"
              onClick={() => void handleCopy(qiCardAccount.replace(/\s+/g, ''), 'qi')}
              style={{ minHeight: '32px', padding: '4px 10px', fontSize: '12px' }}
            >
              {copiedKey === 'qi' ? <Check size={13} /> : <Copy size={13} />}
              <span>{copiedKey === 'qi' ? 'تم النسخ' : 'نسخ'}</span>
            </button>
          </div>
        </div>

        <p className="muted" style={{ fontSize: '12px', margin: '0 0 14px', lineHeight: 1.6 }}>
          {site.paymentNote ||
            'بعد إتمام التحويل يرجى إرسال صورة وصل الدفع عبر الواتساب لتفعيل الباقة على حسابك فوراً.'}
        </p>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <a
            href={waLink(supportPhone, whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn p"
            style={{
              flex: 1,
              background: '#1f9d55',
              borderColor: '#15803d',
              color: '#ffffff',
              justifyContent: 'center',
            }}
          >
            <MessageCircle size={16} />
            <span>تواصل عبر واتساب للشراء</span>
          </a>
          <button type="button" className="btn" onClick={onClose}>
            إغلاق
          </button>
        </div>
      </div>
    </div>
  );
};

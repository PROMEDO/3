/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PromoCouponItem, Restaurant, RestaurantAddons } from '../types';

export type AddonKey = keyof RestaurantAddons;
export type AddonCategoryFilter = 'all' | 'marketing' | 'sales' | 'experience' | 'orders';

export interface AddonMetaItem {
  key: AddonKey;
  category: Exclude<AddonCategoryFilter, 'all'>;
  icon: string;
  title: string;
  desc: string;
}

export const ADDON_CATEGORY_TABS: Array<{ id: AddonCategoryFilter; label: string }> = [
  { id: 'all', label: 'جميع الميزات (50)' },
  { id: 'marketing', label: 'التسويق والعروض' },
  { id: 'sales', label: 'زيادة المبيعات والسلة' },
  { id: 'experience', label: 'تجربة الزبون والتفاعل' },
  { id: 'orders', label: 'إدارة الطلبات والتشغيل' },
];

export const ADDON_CATALOG: AddonMetaItem[] = [
  // --- Top Priority: Most Important Sales, Promos & Core Revenue Drivers ---
  {
    key: 'freeDeliveryProgress',
    category: 'sales',
    icon: '🚚',
    title: 'الحد الأدنى للتوصيل المجاني + شريط التقدم',
    desc: 'تحديد الحد الأدنى للتوصيل المجاني وعرض شريط تقدم تحفيزي للزبون في السلة لزيادة قيمة الطلب.',
  },
  {
    key: 'promoCoupons',
    category: 'marketing',
    icon: '🎟️',
    title: 'أكواد وكوبونات الخصم المتعددة',
    desc: 'إنشاء عدة كوبونات خصم تظهر للزبون في نهاية السلة لتطبيقها فوراً وحساب الخصم في الفاتورة.',
  },
  {
    key: 'offerPopup',
    category: 'marketing',
    icon: '📢',
    title: 'البوب اب الإعلاني المنبثق',
    desc: 'نافذة ترحيبية منبثقة تظهر للزبائن فور دخول المنيو للإعلان عن العروض الجديدة.',
  },
  {
    key: 'announcementBar',
    category: 'marketing',
    icon: '📣',
    title: 'شريط الإعلانات أعلى المنيو',
    desc: 'شريط ملون بارز أعلى القائمة لعرض التنبيهات وأهم العروض اليومية للزوار.',
  },
  {
    key: 'minOrder',
    category: 'sales',
    icon: '🛒',
    title: 'الحد الأدنى لقيمة الطلب',
    desc: 'تحديد أقل مبلغ مسموح به لإتمام طلب التوصيل داخل السلة لضمان جدوى الطلبات.',
  },
  {
    key: 'countdownTimer',
    category: 'marketing',
    icon: '⏳',
    title: 'مؤقت العروض التنازلي + خصم فوري',
    desc: 'عدّاد وقت تنازلي مباشر في أعلى المنيو يطبق نسبة أو مبلغ خصم تلقائياً على جميع أسعار القائمة.',
  },
  {
    key: 'happyHour',
    category: 'marketing',
    icon: '☀️',
    title: 'ساعة السعادة (Happy Hour)',
    desc: 'تفعيل خصم تلقائي خاص يومياً خلال ساعات الهدوء (مثلاً 2 إلى 5 عصراً) لتحفيز الطلبات.',
  },
  {
    key: 'dailySpecialBanner',
    category: 'marketing',
    icon: '🌟',
    title: 'بطاقة طبق اليوم وعرض الشيف',
    desc: 'بطاقة تسويقية مميزة أعلى المنيو تبرز طبقاً معيناً وتفتح تفاصيله مباشرة بضغطة واحدة.',
  },

  // --- High-Impact Operations, Support & Conversion ---
  {
    key: 'whatsappSupportFloat',
    category: 'experience',
    icon: '💬',
    title: 'زر واتساب الاستفسار العائم',
    desc: 'أيقونة واتساب عائمة لتواصل الزبون السريع بشأن العزائم والحجوزات والاستفسارات الخاصة.',
  },
  {
    key: 'tableService',
    category: 'orders',
    icon: '🍽️',
    title: 'خدمة الطاولات ونداء النادل',
    desc: 'تحديد رقم الطاولة وإرسال طلب نداء النادل مباشرة عبر الواتساب للزبائن داخل الصالة.',
  },
  {
    key: 'cartUpsell',
    category: 'sales',
    icon: '🍟',
    title: 'مقترحات زيادة السلة (Upsell)',
    desc: 'عرض أطباق ومشروبات مقترحة بضغطة زر داخل سلة الطلبات لرفع قيمة متوسط الفاتورة.',
  },
  {
    key: 'audioBell',
    category: 'orders',
    icon: '🔔',
    title: 'رنين الجرس الصوتي للطلبات',
    desc: 'تشغيل تنبيه صوتي فوري في لوحة التحكم عند وصول أي طلب جديد.',
  },
  {
    key: 'firstOrderDiscount',
    category: 'marketing',
    icon: '🎁',
    title: 'خصم ترحيبي للطلب الأول',
    desc: 'خصم أوتوماتيكي داخل السلة للزبائن الجدد في أول طلب لهم لتشجيعهم على الشراء الأول.',
  },
  {
    key: 'freeGiftThreshold',
    category: 'sales',
    icon: '🎀',
    title: 'هدية مجانية عند تجاوز مبلغ',
    desc: 'منح هدية مجانية (مشروب أو بطاطا) عند وصول الطلب لمبلغ محدد مع شريط تقدم تحفيزي في السلة.',
  },
  {
    key: 'deliveryEtaTracker',
    category: 'experience',
    icon: '🛵',
    title: 'تقدير وقت التوصيل الحي',
    desc: 'عرض المدة المتوقعة لوصول الطلب بوضوح في واجهة المنيو والسلة لراحة الزبون.',
  },
  {
    key: 'prepBadge',
    category: 'experience',
    icon: '⏱️',
    title: 'شارة وقت التحضير المتوقع',
    desc: 'عرض وقت تحضير وتجهيز الطلبات مباشرة أسفل اسم المطعم لتقليل التساؤلات.',
  },

  // --- Order Controls & Engagement ---
  {
    key: 'serviceFee',
    category: 'sales',
    icon: '📦',
    title: 'رسوم التغليف والخدمة',
    desc: 'إضافة رسوم تغليف أو خدمة ثابتة وتفصيلها بشفافية تلقائياً في السلة والفاتورة.',
  },
  {
    key: 'scheduledOrder',
    category: 'orders',
    icon: '📅',
    title: 'جدولة موعد الطلب المسبق',
    desc: 'السماح للزبون باختيار وقت محدد للاستلام أو التوصيل اليوم بدلاً من الطلب الفوري فقط.',
  },
  {
    key: 'closedNotice',
    category: 'orders',
    icon: '🌙',
    title: 'إشعار الطلب المسبق خارج الدوام',
    desc: 'تنبيه واضح للزبائن عند إغلاق المطعم مع إتاحة استلام الطلبات المسبقة.',
  },
  {
    key: 'chefPicksFilter',
    category: 'experience',
    icon: '🏷️',
    title: 'فلاتر اختيارات الشيف والعروض',
    desc: 'أزرار تصفية ذكية سريعة أعلى المنيو لعرض الأكثر طلباً أو العروض المخفضة فقط.',
  },
  {
    key: 'savedFavorites',
    category: 'experience',
    icon: '❤️',
    title: 'قائمة المفضلة للزبائن',
    desc: 'إتاحة حفظ الأطباق المفضلة لدى الزبون للوصول إليها وطلبها بسرعة في أي زيارة.',
  },
  {
    key: 'quickReorder',
    category: 'experience',
    icon: '🔁',
    title: 'إعادة الطلب السابق بضغطة واحدة',
    desc: 'زر سريع يظهر للزبون لإعادة إضافة أصناف آخر طلب أرسله إلى السلة فوراً.',
  },
  {
    key: 'spinWheelPromo',
    category: 'marketing',
    icon: '🎡',
    title: 'عجلة الحظ والمكافآت التفاعلية',
    desc: 'لعبة عجلة حظ عائمة للزبائن تمنحهم خصماً فورياً أو توصيلاً مجانياً يُطبق مباشرة في السلة.',
  },
  {
    key: 'loyaltyPoints',
    category: 'sales',
    icon: '💎',
    title: 'نظام نقاط الولاء للزبائن',
    desc: 'احتساب نقاط ولاء تلقائية للزبون مع كل طلب وعرض رصيده لتشجيعه على العودة باستمرار.',
  },

  // --- Secondary Enhancements ---
  {
    key: 'customerReviews',
    category: 'experience',
    icon: '⭐',
    title: 'تقييمات وآراء الزبائن',
    desc: 'عرض تقييمات الزبائن في المنيو وإتاحة نموذج إضافة تقييم وتجربة جديدة.',
  },
  {
    key: 'socialProofBadge',
    category: 'sales',
    icon: '🔥',
    title: 'شارة الإقبال الحي (Social Proof)',
    desc: 'إظهار إشعار موثوقية أعلى المنيو بعدد المتصفحين أو الطلبات اليومية لبناء الثقة وتسريع القرار.',
  },
  {
    key: 'flashTipOption',
    category: 'sales',
    icon: '💚',
    title: 'إكرامية سائق التوصيل والكادر',
    desc: 'أزرار اختيارية داخل السلة تتيح للزبون إضافة مبلغ تقديري بسيط للكادر أو السائق.',
  },
  {
    key: 'cutleryOption',
    category: 'orders',
    icon: '🍴',
    title: 'خيار أدوات الطعام والمناديل',
    desc: 'مفتاح اختياري داخل السلة يسأل الزبون إن كان يحتاج ملاعق ومناديل لتقليل الهدر.',
  },
  {
    key: 'groupOrderBillSplit',
    category: 'orders',
    icon: '👥',
    title: 'حاسبة تقسيم الفاتورة للمجموعات',
    desc: 'أداة ذكية داخل السلة للأصدقاء والعوائل لحساب حصة كل شخص من الفاتورة فوراً.',
  },
  {
    key: 'healthNotices',
    category: 'experience',
    icon: '🥗',
    title: 'العبارات الصحية والسعرات',
    desc: 'إظهار قائمة المعلومات الغذائية والتحذيرات الصحية في القائمة الجانبية للمنيو.',
  },

  // --- 20 Global Food-Tech & Viral Restaurant Innovations ---
  {
    key: 'mysteryBoxOffer',
    category: 'marketing',
    icon: '🎁',
    title: 'صندوق المفاجآت السري (Mystery Box)',
    desc: 'وجبة مفاجآت يومية بسعر مخفض يختارها الشيف لتصفية الفائض وجذب عشاق العروض القوية.',
  },
  {
    key: 'moodMealFinder',
    category: 'experience',
    icon: '🧠',
    title: 'مستشار المزاج والوجبة الذكي',
    desc: 'اختبار سريع من 3 ثوانٍ يختار فيه الزبون مزاجه وميزانيته ليرشح له المنيو أنسب 3 أطباق فوراً.',
  },
  {
    key: 'voiceSearchOrder',
    category: 'experience',
    icon: '🎙️',
    title: 'البحث الصوتي عن الأطباق',
    desc: 'زر مايكروفون ذكي في البحث يسمح للزبون بنطق اسم الوجبة بالعربية أو الإنجليزية للوصول لها فوراً.',
  },
  {
    key: 'bogoDealEngine',
    category: 'marketing',
    icon: '💥',
    title: 'عرض الثاني مجاناً أو بنصف السعر (BOGO)',
    desc: 'تطبيق خصم تلقائي في السلة على القطعة الثانية الأقل سعراً عند إضافة قطعتين أو أكثر.',
  },
  {
    key: 'buildYourOwnCombo',
    category: 'sales',
    icon: '🧩',
    title: 'مصمم الكومبو الذكي بخصم تلقائي',
    desc: 'تفعيل خصم فوري متدرج في السلة بمجرد أن يكوّن الزبون وجبة من 3 أصناف أو أكثر.',
  },
  {
    key: 'streakRewardsCard',
    category: 'sales',
    icon: '🏆',
    title: 'بطاقة الأختام الرقمية (Punch Card)',
    desc: 'بطاقة ولاء تفاعلية بأختام رقمية ("اطلب X مرات واحصل على مكافأة مجانية") تُحفظ للزبون تلقائياً.',
  },
  {
    key: 'vipSecretMenuLock',
    category: 'marketing',
    icon: '🔐',
    title: 'القائمة السرية بكود خاص (VIP Secret)',
    desc: 'طبق أو عرض سري مغلق برمز تنشره على إنستقرام وتيك توك ليشعر المتابعون بتميز حصري.',
  },
  {
    key: 'curbsidePickupCar',
    category: 'orders',
    icon: '🚗',
    title: 'الاستلام من السيارة (Drive-Up)',
    desc: 'إدخال نوع ولون السيارة عند الاستلام مع زر "وصلت أمام المطعم" لإرسال إشعار فوري بالواتساب.',
  },
  {
    key: 'smartPairingSuggest',
    category: 'sales',
    icon: '🥤',
    title: 'خبير تنسيق المشروب والصوص',
    desc: 'يقترح تلقائياً داخل نافذة كل طبق المشروب أو الصوص الأنسب له مع زر إضافة بضغطة واحدة.',
  },
  {
    key: 'calorieMacroBudget',
    category: 'experience',
    icon: '🔥',
    title: 'حاسبة السعرات الحرارية الحية بالسلة',
    desc: 'تجمع تلقائياً مجموع السعرات الحرارية لوجبة الزبون داخل السلة مع شريط هدف للدايت والرياضيين.',
  },
  {
    key: 'dietaryAllergyRadar',
    category: 'experience',
    icon: '🛡️',
    title: 'رادار الحساسيات والأنظمة الغذائية',
    desc: 'فلاتر ذكية (نباتي، بدون غلوتين، بدون ألبان، بدون مكسرات، بدون حار) تنبّه وتفلتر الأطباق.',
  },
  {
    key: 'pickupInstantDiscount',
    category: 'marketing',
    icon: '🏃',
    title: 'خصم الاستلام الذاتي الفوري',
    desc: 'تطبيق خصم تلقائي لمن يحضر لاستلام طلبه بنفسه من المطعم لتخفيف ضغط التوصيل.',
  },
  {
    key: 'flashQuantityScarcity',
    category: 'sales',
    icon: '⚡',
    title: 'تنبيه الكمية المحدودة الحي',
    desc: 'شارات ندرة جذابة ("متبقي 4 وجبات فقط اليوم") لرفع سرعة قرار الشراء لدى الزبائن.',
  },
  {
    key: 'birthdayVipTreat',
    category: 'marketing',
    icon: '🎂',
    title: 'مفاجأة المناسبات وأعياد الميلاد',
    desc: 'خيار بالسلة لتعليم الطلب كهدية أو عيد ميلاد مع كرت إهداء مخصص وهدية لطيفة من المطعم.',
  },
  {
    key: 'multiCurrencySwitch',
    category: 'experience',
    icon: '💱',
    title: 'محوّل العملة الفوري (د.ع / $)',
    desc: 'زر علوي يتيح للزبائن والسياح تبديل عرض جميع الأسعار بين العملة المحلية والدولار لحظياً.',
  },
  {
    key: 'dishCompareDrawer',
    category: 'experience',
    icon: '⚖️',
    title: 'مقارنة الأطباق جنباً إلى جنب',
    desc: 'يتيح للزبون المحتار مقارنة طبقين أو ثلاثة (السعر، السعرات، التحضير، الإضافات) في جدول واضح.',
  },
  {
    key: 'liveKitchenLoad',
    category: 'orders',
    icon: '🍳',
    title: 'مؤشر ضغط المطبخ الحي',
    desc: 'شارة احترافية تطمئن الزبائن بحالة المطبخ الحالية (سريع الآن / إقبال متوسط / وقت ذروة).',
  },
  {
    key: 'silentDropoffOption',
    category: 'orders',
    icon: '🤫',
    title: 'خيار التوصيل الصامت عند الباب',
    desc: 'زر بالتوصيل يطلب من السائق ترك الطلب عند الباب أو الاستعلام برسالة دون رن الجرس.',
  },
  {
    key: 'charityMealRoundup',
    category: 'experience',
    icon: '🤲',
    title: 'مشاركة الخير (المساهمة بوجبة محتاج)',
    desc: 'زر إنساني راقٍ بنهاية السلة يتيح للزبون إضافة مبلغ رمزي للمساهمة في مبادرة المطعم الخيرية.',
  },
  {
    key: 'luxuryGiftPackaging',
    category: 'sales',
    icon: '✨',
    title: 'ترقية التغليف الفاخر والحراري (VIP)',
    desc: 'خيار بالسلة لترقية الطلب إلى علبة تغليف فاخرة أو حفظ حرارة للعزائم والهدايا برسوم إضافية.',
  },
];

export function buildDefaultAddons(rest?: Restaurant): RestaurantAddons {
  const saved = (rest?.addons || {}) as Record<string, any>;
  const isCfg = (key: string, legacyEnabled = false) =>
    Boolean(saved[key]?.configured || saved[key]?.enabled || legacyEnabled);
  const fallbackCoupon: PromoCouponItem = {
    code: saved.promoCoupons?.code || 'PLUS10',
    discountType: saved.promoCoupons?.discountType || 'percent',
    discountValue: saved.promoCoupons?.discountValue ?? 10,
    minSubtotal: saved.promoCoupons?.minSubtotal ?? 10000,
  };
  const couponsList: PromoCouponItem[] =
    Array.isArray(saved.promoCoupons?.couponsList) && saved.promoCoupons.couponsList.length > 0
      ? saved.promoCoupons.couponsList
      : [fallbackCoupon];

  return {
    offerPopup: {
      configured: isCfg('offerPopup', Boolean(rest?.offerPopup?.enabled)),
      enabled: saved.offerPopup?.enabled ?? rest?.offerPopup?.enabled ?? false,
      title: saved.offerPopup?.title || rest?.offerPopup?.title || 'عرض خاص ومميز لا يفوتك!',
      subtitle: saved.offerPopup?.subtitle || rest?.offerPopup?.subtitle || 'احصل على خصم 15% عند الطلب عبر الواتساب اليوم',
      image:
        saved.offerPopup?.image ||
        rest?.offerPopup?.image ||
        'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=700&q=80',
      buttonText: saved.offerPopup?.buttonText || rest?.offerPopup?.buttonText || 'تصفح المنيو واطلب الآن',
    },
    announcementBar: {
      configured: isCfg('announcementBar'),
      enabled: saved.announcementBar?.enabled ?? false,
      text: saved.announcementBar?.text || 'توصيل مجاني لجميع الطلبات فوق 25,000 د.ع طوال هذا الأسبوع!',
      bgColor: saved.announcementBar?.bgColor || '#C2410C',
      textColor: saved.announcementBar?.textColor || '#ffffff',
    },
    countdownTimer: {
      configured: isCfg('countdownTimer'),
      enabled: saved.countdownTimer?.enabled ?? false,
      title: saved.countdownTimer?.title || 'عرض الساعة الذهبية',
      discountType: saved.countdownTimer?.discountType || 'percent',
      discountValue: saved.countdownTimer?.discountValue ?? 15,
      discountText: saved.countdownTimer?.discountText || 'خصم 15% لفترة محدودة على كل المنيو',
      endHour: saved.countdownTimer?.endHour ?? 23,
    },
    promoCoupons: {
      configured: isCfg('promoCoupons'),
      enabled: saved.promoCoupons?.enabled ?? false,
      code: couponsList[0]?.code || 'PLUS10',
      discountType: couponsList[0]?.discountType || 'percent',
      discountValue: couponsList[0]?.discountValue ?? 10,
      minSubtotal: couponsList[0]?.minSubtotal ?? 0,
      couponsList,
    },
    customerReviews: {
      configured: isCfg('customerReviews'),
      enabled: saved.customerReviews?.enabled ?? false,
      showOnMenu: saved.customerReviews?.showOnMenu ?? true,
      allowSubmit: saved.customerReviews?.allowSubmit ?? true,
    },
    minOrder: {
      configured: isCfg('minOrder'),
      enabled: saved.minOrder?.enabled ?? false,
      amount: saved.minOrder?.amount ?? 10000,
      message: saved.minOrder?.message || 'الحد الأدنى للطلب هو',
    },
    serviceFee: {
      configured: isCfg('serviceFee'),
      enabled: saved.serviceFee?.enabled ?? false,
      label: saved.serviceFee?.label || 'رسوم التغليف والخدمة',
      amount: saved.serviceFee?.amount ?? 1000,
    },
    tableService: {
      configured: isCfg('tableService'),
      enabled: saved.tableService?.enabled ?? false,
      tablesCount: saved.tableService?.tablesCount ?? 12,
      allowWaiterCall: saved.tableService?.allowWaiterCall ?? true,
    },
    healthNotices: {
      configured: isCfg('healthNotices', Boolean(rest?.showHealthInfoPopup)),
      enabled: saved.healthNotices?.enabled ?? rest?.showHealthInfoPopup ?? false,
      noticesText:
        saved.healthNotices?.noticesText ||
        (rest?.healthNotices?.length
          ? rest.healthNotices.join('\n')
          : 'يحتاج البالغون إلى 2000 سعرة حرارية يومياً.\nلحومنا طازجة وذبح يومي.'),
    },
    audioBell: {
      configured: Boolean(saved.audioBell?.configured || saved.audioBell?.enabled || !saved.audioBell?.mutedByUser),
      enabled: saved.audioBell?.mutedByUser ? false : Boolean(saved.audioBell?.enabled ?? true),
      tone: saved.audioBell?.tone || 'bell',
      ...(saved.audioBell?.mutedByUser ? { mutedByUser: true } : {}),
    },
    prepBadge: {
      configured: isCfg('prepBadge'),
      enabled: saved.prepBadge?.enabled ?? false,
      text: saved.prepBadge?.text || 'التحضير السريع',
      etaText: saved.prepBadge?.etaText || '20 - 30 دقيقة',
    },
    closedNotice: {
      configured: isCfg('closedNotice'),
      enabled: saved.closedNotice?.enabled ?? false,
      message: saved.closedNotice?.message || 'نستقبل الطلبات المسبقة وسيتم تجهيزها فور افتتاح المطعم.',
    },
    happyHour: {
      configured: isCfg('happyHour'),
      enabled: saved.happyHour?.enabled ?? false,
      title: saved.happyHour?.title || 'ساعة السعادة الذهبية',
      startHour: saved.happyHour?.startHour ?? 14,
      endHour: saved.happyHour?.endHour ?? 17,
      discountPercent: saved.happyHour?.discountPercent ?? 15,
    },
    freeGiftThreshold: {
      configured: isCfg('freeGiftThreshold'),
      enabled: saved.freeGiftThreshold?.enabled ?? false,
      minAmount: saved.freeGiftThreshold?.minAmount ?? 25000,
      giftName: saved.freeGiftThreshold?.giftName || 'بيبسي مجاني + صوص خاص',
    },
    cartUpsell: {
      configured: isCfg('cartUpsell'),
      enabled: saved.cartUpsell?.enabled ?? false,
      title: saved.cartUpsell?.title || 'أكمل وجبتك بهذه الإضافات اللذيذة',
      maxItems: saved.cartUpsell?.maxItems ?? 4,
    },
    dailySpecialBanner: {
      configured: isCfg('dailySpecialBanner'),
      enabled: saved.dailySpecialBanner?.enabled ?? false,
      title: saved.dailySpecialBanner?.title || 'اختيار الشيف اليوم',
      subtitle: saved.dailySpecialBanner?.subtitle || 'وجبة مختارة طازجة ومقرمشة بأعلى جودة',
      badgeText: saved.dailySpecialBanner?.badgeText || 'الأكثر طلباً اليوم',
      itemId: saved.dailySpecialBanner?.itemId || '',
    },
    spinWheelPromo: {
      configured: isCfg('spinWheelPromo'),
      enabled: saved.spinWheelPromo?.enabled ?? false,
      title: saved.spinWheelPromo?.title || 'جرّب حظك واربح خصماً فورياً!',
      prizesText: saved.spinWheelPromo?.prizesText || 'خصم 5%\nخصم 10%\nخصم 15%\nتوصيل مجاني',
    },
    loyaltyPoints: {
      configured: isCfg('loyaltyPoints'),
      enabled: saved.loyaltyPoints?.enabled ?? false,
      pointsPerThousand: saved.loyaltyPoints?.pointsPerThousand ?? 1,
      rewardNote: saved.loyaltyPoints?.rewardNote || 'اجمع نقاطك مع كل طلب للحصول على وجبات مجانية',
    },
    socialProofBadge: {
      configured: isCfg('socialProofBadge'),
      enabled: saved.socialProofBadge?.enabled ?? false,
      visitorsCount: saved.socialProofBadge?.visitorsCount ?? 18,
      ordersTodayText: saved.socialProofBadge?.ordersTodayText || '+45 طلب تم توصيله اليوم',
    },
    chefPicksFilter: {
      configured: isCfg('chefPicksFilter'),
      enabled: saved.chefPicksFilter?.enabled ?? false,
      showPopular: saved.chefPicksFilter?.showPopular ?? true,
      showOffers: saved.chefPicksFilter?.showOffers ?? true,
    },
    quickReorder: {
      configured: isCfg('quickReorder'),
      enabled: saved.quickReorder?.enabled ?? false,
      buttonText: saved.quickReorder?.buttonText || 'أعد طلبك السابق بضغطة واحدة',
    },
    savedFavorites: {
      configured: isCfg('savedFavorites'),
      enabled: saved.savedFavorites?.enabled ?? false,
      label: saved.savedFavorites?.label || 'المفضلة',
    },
    cutleryOption: {
      configured: isCfg('cutleryOption'),
      enabled: saved.cutleryOption?.enabled ?? false,
      label: saved.cutleryOption?.label || 'أحتاج أدوات طعام ومناديل مع الطلب',
    },
    deliveryEtaTracker: {
      configured: isCfg('deliveryEtaTracker'),
      enabled: saved.deliveryEtaTracker?.enabled ?? false,
      etaText: saved.deliveryEtaTracker?.etaText || '30 - 45 دقيقة',
    },
    scheduledOrder: {
      configured: isCfg('scheduledOrder'),
      enabled: saved.scheduledOrder?.enabled ?? false,
      label: saved.scheduledOrder?.label || 'اختر موعد التوصيل أو الاستلام',
      slotsText: saved.scheduledOrder?.slotsText || 'فوراً الآن\nبعد ساعة واحدة\nالساعة 6:00 مساءً\nالساعة 8:00 مساءً',
    },
    firstOrderDiscount: {
      configured: isCfg('firstOrderDiscount'),
      enabled: saved.firstOrderDiscount?.enabled ?? false,
      discountPercent: saved.firstOrderDiscount?.discountPercent ?? 10,
      title: saved.firstOrderDiscount?.title || 'هدية الترحيب لطلبك الأول',
    },
    freeDeliveryProgress: {
      configured: isCfg('freeDeliveryProgress'),
      enabled: saved.freeDeliveryProgress?.enabled ?? false,
      label: saved.freeDeliveryProgress?.label || 'شريط التوصيل المجاني',
      minAmount:
        saved.freeDeliveryProgress?.minAmount !== undefined
          ? Math.max(0, Number(saved.freeDeliveryProgress.minAmount) || 0)
          : rest?.freeDeliveryMin && rest.freeDeliveryMin > 0
          ? rest.freeDeliveryMin
          : 25000,
    },
    whatsappSupportFloat: {
      configured: isCfg('whatsappSupportFloat'),
      enabled: saved.whatsappSupportFloat?.enabled ?? false,
      label: saved.whatsappSupportFloat?.label || 'تواصل معنا',
      prefillText: saved.whatsappSupportFloat?.prefillText || 'مرحباً، لدي استفسار عن المنيو والطلبات',
    },
    groupOrderBillSplit: {
      configured: isCfg('groupOrderBillSplit'),
      enabled: saved.groupOrderBillSplit?.enabled ?? false,
      maxPeople: saved.groupOrderBillSplit?.maxPeople ?? 10,
    },
    flashTipOption: {
      configured: isCfg('flashTipOption'),
      enabled: saved.flashTipOption?.enabled ?? false,
      presetsText: saved.flashTipOption?.presetsText || '1000,2000,5000',
    },
    mysteryBoxOffer: {
      configured: isCfg('mysteryBoxOffer'),
      enabled: saved.mysteryBoxOffer?.enabled ?? false,
      title: saved.mysteryBoxOffer?.title || 'صندوق مفاجآت الشيف السري',
      subtitle: saved.mysteryBoxOffer?.subtitle || 'وجبتان + مشروب من اختيار الشيف اليوم بتوفير يصل إلى 40%!',
      price: saved.mysteryBoxOffer?.price ?? 12000,
      originalPrice: saved.mysteryBoxOffer?.originalPrice ?? 20000,
      remainingCount: saved.mysteryBoxOffer?.remainingCount ?? 5,
    },
    bogoDealEngine: {
      configured: isCfg('bogoDealEngine'),
      enabled: saved.bogoDealEngine?.enabled ?? false,
      title: saved.bogoDealEngine?.title || 'اطلب قطعتين واحصل على خصم فوري للثانية',
      secondItemDiscountPercent: saved.bogoDealEngine?.secondItemDiscountPercent ?? 50,
    },
    vipSecretMenuLock: {
      configured: isCfg('vipSecretMenuLock'),
      enabled: saved.vipSecretMenuLock?.enabled ?? false,
      secretCode: saved.vipSecretMenuLock?.secretCode || 'VIP2026',
      dishName: saved.vipSecretMenuLock?.dishName || 'برجر الشيف السري بالكمأة والجبن المدخن',
      dishDesc: saved.vipSecretMenuLock?.dishDesc || 'وصفة خاصة غير متوفرة في المنيو العام — حصرياً لحاملي الرمز!',
      dishPrice: saved.vipSecretMenuLock?.dishPrice ?? 14000,
    },
    pickupInstantDiscount: {
      configured: isCfg('pickupInstantDiscount'),
      enabled: saved.pickupInstantDiscount?.enabled ?? false,
      title: saved.pickupInstantDiscount?.title || 'خصم خاص للاستلام الذاتي من المطعم',
      discountPercent: saved.pickupInstantDiscount?.discountPercent ?? 10,
    },
    birthdayVipTreat: {
      configured: isCfg('birthdayVipTreat'),
      enabled: saved.birthdayVipTreat?.enabled ?? false,
      label: saved.birthdayVipTreat?.label || 'الطلب لمناسبة أو عيد ميلاد (كرت إهداء مجاني)',
      freeTreatNote: saved.birthdayVipTreat?.freeTreatNote || 'شمعة احتفالية + كرت معايدة مكتوب بخط اليد مجاناً',
    },
    buildYourOwnCombo: {
      configured: isCfg('buildYourOwnCombo'),
      enabled: saved.buildYourOwnCombo?.enabled ?? false,
      title: saved.buildYourOwnCombo?.title || 'كوّن وجبتك من 3 أصناف واحصل على خصم الكومبو',
      requiredCount: saved.buildYourOwnCombo?.requiredCount ?? 3,
      discountPercent: saved.buildYourOwnCombo?.discountPercent ?? 12,
    },
    flashQuantityScarcity: {
      configured: isCfg('flashQuantityScarcity'),
      enabled: saved.flashQuantityScarcity?.enabled ?? false,
      badgePrefix: saved.flashQuantityScarcity?.badgePrefix || 'متبقي اليوم',
      defaultRemaining: saved.flashQuantityScarcity?.defaultRemaining ?? 4,
    },
    streakRewardsCard: {
      configured: isCfg('streakRewardsCard'),
      enabled: saved.streakRewardsCard?.enabled ?? false,
      targetOrders: saved.streakRewardsCard?.targetOrders ?? 5,
      rewardTitle: saved.streakRewardsCard?.rewardTitle || 'وجبة أو مشروب مجاني عند إكمال 5 طلبات',
    },
    smartPairingSuggest: {
      configured: isCfg('smartPairingSuggest'),
      enabled: saved.smartPairingSuggest?.enabled ?? false,
      title: saved.smartPairingSuggest?.title || 'يناسب طبقك بشكل مثالي 🔥',
      categoryKeyword: saved.smartPairingSuggest?.categoryKeyword || 'مشروب',
    },
    luxuryGiftPackaging: {
      configured: isCfg('luxuryGiftPackaging'),
      enabled: saved.luxuryGiftPackaging?.enabled ?? false,
      label: saved.luxuryGiftPackaging?.label || 'ترقية إلى تغليف VIP حراري فاخر للعزائم',
      feeAmount: saved.luxuryGiftPackaging?.feeAmount ?? 2000,
    },
    moodMealFinder: {
      configured: isCfg('moodMealFinder'),
      enabled: saved.moodMealFinder?.enabled ?? false,
      title: saved.moodMealFinder?.title || 'محتار شتاكل؟ خلّي مستشار المزاج يختارلك!',
      buttonText: saved.moodMealFinder?.buttonText || 'اختر لي وجبة حسب مزاجي ✨',
    },
    voiceSearchOrder: {
      configured: isCfg('voiceSearchOrder'),
      enabled: saved.voiceSearchOrder?.enabled ?? false,
      lang: saved.voiceSearchOrder?.lang || 'ar-IQ',
      hintText: saved.voiceSearchOrder?.hintText || 'تحدث الآن واذكر اسم الطبق...',
    },
    dietaryAllergyRadar: {
      configured: isCfg('dietaryAllergyRadar'),
      enabled: saved.dietaryAllergyRadar?.enabled ?? false,
      warningText: saved.dietaryAllergyRadar?.warningText || 'تنبيه: قد يحتوي هذا الطبق على أحد الخيارات المستبعدة في فلتر صحتك',
    },
    calorieMacroBudget: {
      configured: isCfg('calorieMacroBudget'),
      enabled: saved.calorieMacroBudget?.enabled ?? false,
      targetCalories: saved.calorieMacroBudget?.targetCalories ?? 900,
    },
    multiCurrencySwitch: {
      configured: isCfg('multiCurrencySwitch'),
      enabled: saved.multiCurrencySwitch?.enabled ?? false,
      altSymbol: saved.multiCurrencySwitch?.altSymbol || '$',
      exchangeRate: saved.multiCurrencySwitch?.exchangeRate ?? 1500,
    },
    dishCompareDrawer: {
      configured: isCfg('dishCompareDrawer'),
      enabled: saved.dishCompareDrawer?.enabled ?? false,
      maxCompare: saved.dishCompareDrawer?.maxCompare ?? 3,
    },
    charityMealRoundup: {
      configured: isCfg('charityMealRoundup'),
      enabled: saved.charityMealRoundup?.enabled ?? false,
      title: saved.charityMealRoundup?.title || 'ساهم بمبلغ بسيط لإطعام محتاج (مبادرة الخير)',
      donationAmount: saved.charityMealRoundup?.donationAmount ?? 1000,
    },
    curbsidePickupCar: {
      configured: isCfg('curbsidePickupCar'),
      enabled: saved.curbsidePickupCar?.enabled ?? false,
      instructions: saved.curbsidePickupCar?.instructions || 'اركن سيارتك أمام البوابة واضغط وصلت ليخرج الموظف إليك',
      allowArrivedPing: saved.curbsidePickupCar?.allowArrivedPing ?? true,
    },
    liveKitchenLoad: {
      configured: isCfg('liveKitchenLoad'),
      enabled: saved.liveKitchenLoad?.enabled ?? false,
      level: saved.liveKitchenLoad?.level || 'calm',
      customNote: saved.liveKitchenLoad?.customNote || 'المطبخ هادئ الآن — طلبك يجهز بأسرع وقت',
    },
    silentDropoffOption: {
      configured: isCfg('silentDropoffOption'),
      enabled: saved.silentDropoffOption?.enabled ?? false,
      label: saved.silentDropoffOption?.label || 'توصيل صامت: اترك الطلب عند الباب بدون رن الجرس أو اتصال',
    },
  };
}

export interface ActiveMenuDiscount {
  active: boolean;
  type: 'percent' | 'fixed';
  value: number;
  sourceLabel: string;
}

export function getActiveMenuDiscount(addons?: RestaurantAddons, nowMs = Date.now()): ActiveMenuDiscount {
  // 1. Countdown flash offer takes precedence if discountValue > 0
  if (addons?.countdownTimer?.enabled) {
    const val = Number(addons.countdownTimer.discountValue ?? 0);
    if (val > 0) {
      return {
        active: true,
        type: addons.countdownTimer.discountType === 'fixed' ? 'fixed' : 'percent',
        value: val,
        sourceLabel: addons.countdownTimer.title || 'عرض المؤقت',
      };
    }
  }

  // 2. Happy Hour automatic time-window discount
  if (addons?.happyHour?.enabled) {
    const pct = Number(addons.happyHour.discountPercent ?? 0);
    if (pct > 0) {
      const hr = new Date(nowMs).getHours();
      const start = Number(addons.happyHour.startHour ?? 14);
      const end = Number(addons.happyHour.endHour ?? 17);
      const inWindow = start <= end ? hr >= start && hr < end : hr >= start || hr < end;
      if (inWindow) {
        return {
          active: true,
          type: 'percent',
          value: pct,
          sourceLabel: addons.happyHour.title || 'ساعة السعادة',
        };
      }
    }
  }

  return { active: false, type: 'percent', value: 0, sourceLabel: '' };
}

export function applyMenuPriceDiscount(rawPrice: number, discount: ActiveMenuDiscount): number {
  const base = Number(rawPrice) || 0;
  if (!discount.active || discount.value <= 0 || base <= 0) return base;
  if (discount.type === 'fixed') {
    return Math.max(0, base - discount.value);
  }
  return Math.max(0, Math.round(base * (1 - Math.min(95, discount.value) / 100)));
}

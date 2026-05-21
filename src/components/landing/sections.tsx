import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-white border-white">Срочный набор — 2026</Badge>,
    title: "Строим будущее Мариуполя.",
    showButton: true,
    buttonText: 'Откликнуться',
    buttonHref: 'https://max.ru/',
    bgImage: 'https://cdn.poehali.dev/projects/fbef872b-3c30-462f-8f99-b13ba48ec336/files/91909043-f621-44bd-9f87-09da55a04d83.jpg'
  },
  {
    id: 'about',
    title: 'Успех-Строй.',
    content: 'В 2026 году мы подписали ключевой контракт на восстановление Мариупольского металлургического комбината имени Ильича — одного из крупнейших промышленных объектов региона.',
    bgImage: 'https://cdn.poehali.dev/projects/fbef872b-3c30-462f-8f99-b13ba48ec336/files/df8d51c4-40d7-4537-83a6-cd80ce79bfcd.jpg'
  },
  {
    id: 'features',
    title: 'Кого мы ищем',
    content: 'Строители для работы на объектах промышленного значения. Водители для логистики и транспортного сопровождения. Охранники для обеспечения безопасности на строительных площадках.',
    bgImage: 'https://cdn.poehali.dev/projects/fbef872b-3c30-462f-8f99-b13ba48ec336/files/0142d45a-7886-454e-9481-3a7cae3ef550.jpg'
  },
  {
    id: 'testimonials',
    title: 'Стратегический проект.',
    content: 'Восстановление комбината имени Ильича — это масштабная реконструкция промышленного потенциала региона. Участие в этом проекте — вклад в историю и возможность стабильной работы на годы вперёд.',
    bgImage: 'https://cdn.poehali.dev/projects/fbef872b-3c30-462f-8f99-b13ba48ec336/files/857b7534-9dd8-46ad-a606-bf6681692e8b.jpg'
  },
  {
    id: 'join',
    title: 'Готовы работать?',
    content: 'Позвоните нам для консультации — расскажем об условиях работы, графике и оплате.',
    showButton: true,
    buttonText: 'Позвонить: 8 987 835-39-92',
    buttonHref: 'tel:+79878353992',
    bgImage: 'https://cdn.poehali.dev/projects/fbef872b-3c30-462f-8f99-b13ba48ec336/files/2c25a65e-00b6-49d7-b606-e53f62ad25cb.jpg'
  },
]
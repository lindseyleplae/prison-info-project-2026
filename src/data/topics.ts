export type TopicDefinition = {
  slug: string;
  label: string;
  shortLabel: string;
  icon: string;
  order: number;
};

export const topics: TopicDefinition[] = [
  { slug: 'visiting', label: 'Visiting', shortLabel: 'Visiting', icon: 'door-open', order: 1 },
  { slug: 'mail', label: 'Mail and Packages', shortLabel: 'Mail', icon: 'mailbox', order: 2 },
  { slug: 'phone-video', label: 'Phone and Video Calls', shortLabel: 'Phone and Video', icon: 'phone', order: 3 },
  { slug: 'money', label: 'Sending Money', shortLabel: 'Money', icon: 'wallet', order: 4 },
  { slug: 'medical', label: 'Medical and Mental Health', shortLabel: 'Medical', icon: 'clipboard', order: 5 },
  { slug: 'transfers', label: 'Transfers', shortLabel: 'Transfers', icon: 'arrows-right-left', order: 6 }
];

export const topicMap = new Map(topics.map((topic) => [topic.slug, topic]));

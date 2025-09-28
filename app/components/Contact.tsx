import { Mail, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section className="text-center py-20 max-w-xl mx-auto mb-16">
      <h2 className="text-2xl font-medium mb-4 text-white/90">
        Ready to Start Your Project?
      </h2>
      <p className="text-sm text-gray-400 mb-10 max-w-md mx-auto leading-relaxed">
        Let&apos;s discuss how we can bring your ideas to life. I&apos;m available for both freelance projects and full-time opportunities.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="mailto:kaessam@hotmail.com"
          className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 text-white rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 hover:translate-y-[-2px]"
        >
          <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
          <span>Get in Touch</span>
        </a>
        <a
          href="https://wa.me/+201103633998"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 text-white rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 hover:translate-y-[-2px]"
        >
          <MessageSquare className="w-4 h-4 group-hover:scale-110 transition-transform" />
          <span>Chat on WhatsApp</span>
        </a>
      </div>
    </section>
  );
}

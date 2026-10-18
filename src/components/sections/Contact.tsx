import ContactForm from "@/components/ui/ContactForm";
import SocialLinks from "@/components/ui/SocialLinks";
import { site } from "@/data/site";
import { toTel, toWhatsApp } from "@/lib/utils";

export default function Contact() {
  return (
    <section id="contact" className="contact2">
      <div className="wrap">
        <div className="cgrid">
          <div className="cleft">
            <p className="abt-sub" style={{ marginBottom: 10 }}>Get in Touch</p>
            <h2>Let’s Connect and Build Something Great</h2>
            <p className="lead">
              Have a project idea, a job opportunity, or just want to talk about web development and technology? I’d
              love to hear from you! Feel free to reach out through email, phone, or WhatsApp. I’m always open to
              connecting with people, sharing ideas, and exploring new opportunities.
            </p>
            <div className="clinks">
              {site.email && (
                <a className="btn p" href={`mailto:${site.email}`}>
                  Email Address<span>{site.email}</span>
                </a>
              )}
              {site.phone && (
                <a className="btn" href={toTel(site.phone)}>
                  Phone Number<span>{site.phone}</span>
                </a>
              )}
              {site.whatsapp && (
                <a className="btn" href={toWhatsApp(site.whatsapp)} target="_blank" rel="noopener noreferrer">
                  WhatsApp<span>{site.whatsapp}</span>
                </a>
              )}
              <SocialLinks />
            </div>
            <p className="lead" style={{ margin: "22px 0 0" }}>
              Whether you’re looking to collaborate on a project, discuss an opportunity, or simply connect, don’t
              hesitate to get in touch. I’ll be happy to hear from you!
            </p>
          </div>
          <div className="cform card">
            <h3>Send a message</h3>
            <p className="sub">Fill in the details and Gmail opens in a new tab with your message ready to send.</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

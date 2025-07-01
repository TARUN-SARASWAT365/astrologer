import React from "react";
import "../pages/services.css";

const services = [
  {
    icon: "🌠",
    title: "व्यक्तिगत राशिफल विश्लेषण",
    description: "अपने ज्योतिषीय चार्ट में गहराई से जानें और जीवन के पैटर्न, शक्तियों और अवसरों को पहचानें।",
  },
  {
    icon: "💑",
    title: "प्रेम और विवाह अनुकूलता",
    description: "भावनात्मक सामंजस्य और अपने साथी के साथ अनुकूलता को ज्योतिषीय दृष्टिकोण से समझें।",
  },
  {
    icon: "🃏",
    title: "टैरो कार्ड रीडिंग",
    description: "जीवन के सवालों और अनिश्चितताओं के बीच स्पष्टता पाने के लिए कार्ड्स से मार्गदर्शन लें।",
  },
  {
    icon: "📈",
    title: "व्यवसाय और करियर सलाह",
    description: "व्यापार वृद्धि और करियर प्रगति के लिए ब्रह्मांडीय चक्रों के आधार पर रणनीतिक निर्णय लें।",
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <div className="container">
        <h2 className="section-title">हमारी पेशेवर सेवाएँ</h2>
        <p className="section-subtitle">
          अपनी अनोखी जीवन यात्रा के लिए व्यक्तिगत ज्योतिषीय मार्गदर्शन प्राप्त करें।
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

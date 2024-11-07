"use client";

export const MapSection = () => {
  return (
    <iframe
      src={
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8190357185326!2d36.81889237496568!3d-1.2823740987054257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11fb2e00e4cd%3A0x4cc3600212b09277!2sKimathi%20Chambers!5e0!3m2!1sen!2snp!4v1730718965071!5m2!1sen!2snp"
      }
      className="w-full filter brightness-100 contrast-100 saturate-30 blur-0 hue-rotate-0 "
      height={450}
      style={{ border: 0 }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
};

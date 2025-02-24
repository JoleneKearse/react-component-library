

const Section = ({ title, children }) => {
  return (
    <section id={title.toLowerCase()} className="section-title">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default Section;
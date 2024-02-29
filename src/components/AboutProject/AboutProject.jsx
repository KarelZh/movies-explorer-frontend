function AboutProject() {
  return (
  <section className="about" id="about">
    <h2 className="about__info">О проекте</h2>
    <div className="about__block">
      <div className="about__text">
        <h3 className="about__text-info">Дипломный проект включал 5 этапов</h3>
        <p className="about__text-work">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
      </div>
      <div className="about__text">
        <h3 className="about__text-info">На выполнение диплома ушло 5 недель</h3>
        <p className="about__text-work">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </div>
    </div>
    <table className="about__schema">
      <tr className="about__schema-title">
        <th className="about__schema-texttitle1">1 неделя</th>
        <th className="about__schema-texttitle2">4 недели</th>
      </tr>
      <tr className="about__schema-title">
        <td className="about__schema-text1">Back-end</td>
        <td className="about__schema-text2">Front-end</td>
      </tr>
    </table>
  </section>
  );
};
export default AboutProject;
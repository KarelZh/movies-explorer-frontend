function AboutProject() {
  return (
  <div className="about">
    <p className="about__info">О проекте</p>
    <p className="about__border" />
    <div className="about__block">
      <div className="about__text">
        <p className="about__text__info">Дипломный проект включал 5 этапов</p>
        <p className="about__text__work">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
      </div>
      <div className="about__text">
        <p className="about__text__info">На выполнение диплома ушло 5 недель</p>
        <p className="about__text__work">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </div>
    </div>
    <table className="about__schema">
      <tr className="about__schema_title">
        <th className="about__schema_texttitle1">1 неделя</th>
        <th className="about__schema_texttitle2">4 недели</th>
      </tr>
      <tr className="about__schema_title">
        <td className="about__schema_text1">Back-end</td>
        <td className="about__schema_text2">Front-end</td>
      </tr>
    </table>
  </div>
  );
};
export default AboutProject;
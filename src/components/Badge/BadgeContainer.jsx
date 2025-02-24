import Badge from "./Badge";

const BadgeContainer = () => {
  return (
    <div className="badges">
      <Badge badgeClass="gray">Gray</Badge>
      <Badge badgeClass="red">Red</Badge>
      <Badge badgeClass="yellow">Yellow</Badge>
      <Badge badgeClass="green">Green</Badge>
      <Badge badgeClass="blue">Blue</Badge>
      <Badge badgeClass="indigo">Indigo</Badge>
      <Badge badgeClass="purple">Purple</Badge>
      <Badge badgeClass="pink">Pink</Badge>
      <Badge badgeClass="gray" badgeStyle="pill">Gray</Badge>
      <Badge badgeClass="red" badgeStyle="pill">Red</Badge>
      <Badge badgeClass="yellow" badgeStyle="pill">Yellow</Badge>
      <Badge badgeClass="green" badgeStyle="pill">Green</Badge>
      <Badge badgeClass="blue" badgeStyle="pill">Blue</Badge>
      <Badge badgeClass="indigo" badgeStyle="pill">Indigo</Badge>
      <Badge badgeClass="purple" badgeStyle="pill">Purple</Badge>
      <Badge badgeClass="pink" badgeStyle="pill">Pink</Badge>
    </div>
  );
}

export default BadgeContainer;
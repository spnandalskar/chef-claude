import chefClaudeIcon from "../img/chef-claude-icon.png";

export default function Header() {
  return (
    <header>
      <div className="header">
        <img
          src={chefClaudeIcon}
          alt="Chef Claude Icon"
          className="header-icon"
        />
        <h1 className="header-title">Chef Claude</h1>
      </div>
    </header>
  );
}

export function Tag({ children, skill, type, tag }) {
  return (
    <div className={`${type}-container`}>
      {children && children}
      {skill && <img src={`/skills/${skill}`} alt={skill} />}
      {tag && <span>{tag}</span>}
    </div>
  )
}

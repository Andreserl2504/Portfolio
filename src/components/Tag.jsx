export function Tag({ children, skill, type, tag }) {
  return (
    <div className={`${type}-container`}>
      {children && children}
      {skill && <img src={`/src/assets/skills/${skill}`} alt={skill} />}
      {tag && <span>{tag}</span>}
    </div>
  )
}

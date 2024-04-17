export function Tag({ tec, type }) {
  return (
    <div className={`${type}-container`}>
      <img src={`/src/assets/skills/${tec}.svg`} alt={tec} />
    </div>
  )
}

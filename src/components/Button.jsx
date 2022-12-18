import classNames from "classnames"

const variants = {
  primary: "text-lg font-bold px-4 py-2 active:bg-slate-50",
  secondary: "text-lg font-bold py-2 active:bg-slate-50",
  icon: "",
}

const Button = (props) => {
  const {
    variant = "primary",
    className,
    hasBorderFirst,
    hasBorder,
    ...otherProps
  } = props

  return (
    <button
      {...otherProps}
      className={classNames(variants[variant], className, {
        "first:border-l border-r border-t rounded-t-lg": hasBorderFirst,
        "border-l border-r border-t rounded-t-lg": hasBorder,
      })}
    />
  )
}

export default Button

import { BiSearch } from 'react-icons/bi';

export default function SearchBar({display, alignItems, backgroundColor, margin, marginRight, marginLeft, inputBackground, inputLeft, inputBorder, inputPadding, inputWidth, padding, paddingLeft, paddingRight, border, outline, borderRadius, width, height, iconSize, iconLeft, iconRight, placeholder}) {
  return (
    <div style={{
      display: display,
      alignItems: alignItems,
      backgroundColor: backgroundColor,
      padding: padding,
      paddingLeft: paddingLeft,
      paddingRight: paddingRight,
      borderRadius: borderRadius,
      border: border,
      margin: margin,
      marginLeft: marginLeft,
      marginRight: marginRight,
      width: width,
      height: height
    }}>
      <BiSearch size={iconSize}
      style={{
        marginLeft: iconLeft,
        marginRight: iconRight,
        cursor: 'pointer',
      }} />
      <input 
      style={{
        border: inputBorder,
        marginLeft: inputLeft,
        backgroundColor: inputBackground,
        width: inputWidth,
        outline: outline,
        padding: inputPadding
      }} placeholder={placeholder} />
    </div>
  )
}
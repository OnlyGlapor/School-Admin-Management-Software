export default function Box({ className, width, height, backgroundColor, border, borderTop, borderRadius, display, flexDirection, alignItems, justifyContent, padding, margin, marginTop, borderShadow, overflowY, children }) {
  return (
    <div className={className} style={{
      width: width,
      height: height,
      backgroundColor: backgroundColor,
      border: border,
      borderTop: borderTop,
      borderRadius: borderRadius,
      display: display,
      flexDirection: flexDirection,
      alignItems: alignItems,
      justifyContent: justifyContent,
      padding: padding,
      margin: margin,
      marginTop: marginTop,
      boxShadow: borderShadow,
      overflowY: overflowY
    }}>
      {children}
    </div>
  )
}


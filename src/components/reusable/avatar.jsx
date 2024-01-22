export default function Avatar ({src, size, borderRadius, backgroundColor}){
	return(
		<img
		src={src}
		style={{
			width: size,
			height: size,
			borderRadius: borderRadius,
			backgroundColor: backgroundColor,
		}} />
	)
}
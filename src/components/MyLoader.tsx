import React from "react"
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native"

const MyLoader = (props) => (
    <ContentLoader
        speed={2}
        width={540}
        height={800}
        viewBox="0 0 400 160"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <Rect x="8" y="2" rx="0" ry="0" width="300" height="300" />
    </ContentLoader>
)

export default MyLoader



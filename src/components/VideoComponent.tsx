import getVideoSrc from "@/utils/getVideoSrc";

type VideoComponentProps = {
    title?: string;
}

export default function VideoComponent({ title = "Video pitch" }: VideoComponentProps) {
    const src = getVideoSrc();
    return (
        <iframe
            src={src}
            frameBorder={0}
            allowFullScreen
            title={title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
    );
}

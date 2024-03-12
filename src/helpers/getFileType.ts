import { ItemTypes } from "@/db/types";
const fileExtensionToType:Record<string,ItemTypes> = {
	png:ItemTypes.Image,
	jpg:ItemTypes.Image,
	jpeg:ItemTypes.Image,
	webp:ItemTypes.Image,
	mp4:ItemTypes.Video,
	mp3:ItemTypes.Audio,
	zip:ItemTypes.Archive,
	docx:ItemTypes.Text,
}
export function getFileType(file:File):ItemTypes{
	const extension = file.name.split('.').pop()
	if(!extension) return ItemTypes.Other
	return fileExtensionToType[extension] || ItemTypes.Other
}
export const enum JustifyContentEnum {
    center = 'center',
    left = 'left',
}

export interface IMainButtonProps {
    title: string
    navigateTo: string
    justifyContent?: JustifyContentEnum
    disabled?: boolean
    imageSrc?: string
    handleClick?: () => void
}

export default function Button({children, width, size="sm", ...props}) {
    return (
        <button
            className={`bg-blue-500 text-sm text-white font-semibold rounded-lg ${
                size === 'sm' ? 'py-1 px-5' : size === 'md' ? 'py-2 px-4' : size == 'lg' ? 'py-3 px-6' : 'py-2 px-4'
            } uppercase ${width}`}
            {...props}
        >{children}
        </button>
    )
}

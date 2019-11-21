import Rem from './Rem'

export default function FontSize(level: number) {
    if (level === 1) {
        return Rem()
    } else if (level === 2) {
        return 1.2 * Rem()
    } else if (level === 3) {
        return 1.4 * Rem()
    } else if (level === 4) {
        return 2.4 * Rem()
    } else if (level === 5) {
        return 3 * Rem()
    }
}

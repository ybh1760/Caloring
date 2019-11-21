export default async () => {
    try {
        const response = await fetch(`/user/attack`, {
            method: 'PUT',
        })
        if (!response.ok) {
            throw new Error('attack이 안됨')
        }
    } catch (err) {
        throw new Error('attack request error')
    }
}

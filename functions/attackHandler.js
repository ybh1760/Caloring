export default async () => {
    try {
        const response = await fetch(
            `http://15.164.129.166:8080/user/${userData.id}/attack`,
            {
                method: 'PUT',
            }
        )
        if (!response.ok) {
            throw new Error('attack이 안됨')
        }
    } catch (err) {
        throw new Error('attack request error')
    }
}

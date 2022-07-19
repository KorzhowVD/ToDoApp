import { useState } from "react"

export const useFetcing = (callback) => {
	const [isLoading, setIsLoading] = useState(false)
	//Обработка ошибок
	const [error, setError] = useState('')

	const fetching = async () => {
		try {
			setIsLoading(true)
			await callback()
		} catch (error) {
			setError(error.message)
		} finally {
			setIsLoading(false)
		}
	}

	return [fetching, isLoading, error]
}
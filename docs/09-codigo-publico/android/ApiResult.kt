package com.bookrats.app.core.error

/**
 * Convenience alias: every repository function returns Result<T> where
 * the failure is always an [AppError].
 */
typealias ApiResult<T> = Result<T>

/** Extracts a human-readable message from a failed [Result]. */
fun <T> Result<T>.errorMessage(): String? =
    exceptionOrNull()?.let { (it as? AppError)?.userMessage ?: it.message }

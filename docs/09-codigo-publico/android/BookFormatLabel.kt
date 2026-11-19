package com.bookrats.app.core.text

/** Formato da edição como o iOS mostra: print ou vazio = Livro físico. */
object BookFormatLabel {
    fun label(format: String?): String = when (format?.trim()?.lowercase()) {
        null, "", "print" -> "Livro físico"
        "ebook" -> "Ebook"
        "audiobook" -> "Audiolivro"
        else -> format.trim()
    }

    fun isEbook(format: String?): Boolean = format?.trim()?.lowercase() == "ebook"
}

//
//  SearchHistoryDTOs.swift
//  BookLog
//
//  Created by João Vitor Rocha Miranda on 14/05/26.
//

import Foundation

struct SearchHistoryQueryDTO {
    let limit: Int

    var queryItems: [URLQueryItem] {
        [
            URLQueryItem(name: "limit", value: String(limit))
        ]
    }
}

struct SaveSearchHistoryRequestDTO: Encodable {
    let query: String
}

struct RemoveSearchHistoryRequestDTO: Encodable {
    let query: String
}

struct SearchHistoryItemDTO: Decodable {
    let query: String
    let searchedAt: String
}

struct SearchHistoryPayloadDTO: Decodable {
    let searches: [SearchHistoryItemDTO]
}

struct SearchHistoryResponseDTO: Decodable {
    let data: SearchHistoryPayloadDTO
}

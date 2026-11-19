//
//  PaginationDTOs.swift
//  BookLog
//
//  Created by João Vitor Rocha Miranda on 12/05/26.
//

import Foundation

struct PageInfoDTO: Codable, Equatable {
    let cursor: String?
    let nextCursor: String?
    let hasNextPage: Bool
    let limit: Int

    init(cursor: String?, nextCursor: String?, hasNextPage: Bool, limit: Int) {
        self.cursor = cursor
        self.nextCursor = nextCursor
        self.hasNextPage = hasNextPage
        self.limit = limit
    }

    private enum CodingKeys: String, CodingKey {
        case cursor
        case nextCursor
        case hasNextPage
        case limit
    }

    init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        cursor = try container.decodeIfPresent(String.self, forKey: .cursor)
        nextCursor = try container.decodeIfPresent(String.self, forKey: .nextCursor)
        hasNextPage = try container.decodeIfPresent(Bool.self, forKey: .hasNextPage) ?? false
        limit = try container.decodeIfPresent(Int.self, forKey: .limit) ?? 0
    }
}

struct CursorPaginationQueryDTO: Equatable {
    let cursor: String?
    let limit: Int?

    init(cursor: String? = nil, limit: Int? = nil) {
        self.cursor = cursor
        self.limit = limit
    }

    var queryItems: [URLQueryItem] {
        var items: [URLQueryItem] = []

        if let cursor, !cursor.isEmpty {
            items.append(URLQueryItem(name: "cursor", value: cursor))
        }

        if let limit {
            items.append(URLQueryItem(name: "limit", value: String(limit)))
        }

        return items
    }
}

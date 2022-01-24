import React from 'react'
import { connect } from 'react-redux'
import MaterialTable from 'material-table'


function BooksTable() {
  const books = [
    {
      "id": 240,
      "book_author": [
        "Worcester, Joseph Emerson (1784–1865) "
      ],
      "book_title": "Ιστορία της Αρχαίας Ελλάδος",
      "book_publication_year": 1831,
      "book_publication_country": "Μάλτα",
      "book_publication_city": "Μελίτη",
      "book_pages": 60
    },
    {
      "id": 245,
      "book_author": [
        "Worcester, Joseph Emerson (1784–1865) "
      ],
      "book_title": "Σύνοψις της Ρωμαϊκής Ιστορίας",
      "book_publication_year": 1831,
      "book_publication_country": "Μάλτα",
      "book_publication_city": "Μελίτη",
      "book_pages": 92
    },
    {
      "id": 2482,
      "book_author": [
        "Worcester, Joseph Emerson (1784–1865) "
      ],
      "book_title": "Ιστορία της Αρχαίας Ελλάδος, εις χρήσιν των Σχολείων",
      "book_publication_year": 1831,
      "book_publication_country": "Μάλτα",
      "book_publication_city": "Μελίτη",
      "book_pages": 60
    }
  ]
  
  return (
    <div style={{ maxWidth: '100%' }}>
      <MaterialTable
        columns={[
          { title: 'Book_title', field: 'book_title' },
          { title: 'Author', field: 'book_author' },
          { title: 'Pages', field: 'book_pages', type: 'numeric' },
          { title: 'Publication Year', field: 'book_publication_year', type: 'numeric' },
          { title: 'Publication Country', field: 'book_publication_country' },
          { title: 'Publication City', field: 'book_publication_city' }
        ]}
        data={books}
        title=""
      />
    </div>
  )
};

export default connect()(BooksTable);
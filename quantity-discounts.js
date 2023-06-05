jQuery(function($) {
    // Add row button
    $('.add_discount_row').on('click', function(e) {
      e.preventDefault();
  
      var index = $('.quantity_discounts tbody tr').length;
      var row = `
        <tr>
          <td><input type="number" step="1" min="1" name="quantity_discounts[${index}][quantity]" value="" /></td>
          <td><input type="number" step="0.01" min="0" name="quantity_discounts[${index}][percentage]" value="" /></td>
        </tr>
      `;
  
      $('.quantity_discounts tbody').append(row);
    });
  });
  
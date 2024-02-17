import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminActionsService } from '../../services/admin-actions.service';
import { Producto } from 'src/app/modules/products/interfaces/Product.interface';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  editProductForm!: FormGroup
  selectedFile!: File | null
  id: string = ""
  constructor(private fb: FormBuilder, private adminActions: AdminActionsService )
     {

        this.editProductForm = this.fb.group({
          name: ['', Validators.required],
          description: ['', Validators.required],
          price: ['', [Validators.required, Validators.email]],
          category: ['', [Validators.required]],
          image: [null]
        })

      }

  ngOnInit() {

    this.adminActions.getProductById(this.id).subscribe({
      next: (product: any) => {
        this.editProductForm.patchValue({
          name: product.name,
          description: product.description,
          price: product.price,
          category: product.category,
        });
      }
    })


  }

    // Función para manejar el cambio en el input de tipo archivo
    onFileChange(event: Event): void {
      const inputElement = event.target as HTMLInputElement;

      if (inputElement.files && inputElement.files.length > 0) {
        this.selectedFile = inputElement.files[0];
      } else {
        this.selectedFile = null;
      }
    }

  editProduct(){
    const formData = new FormData();

    // Obtén los valores del formulario
    const { name, description, category, price } = this.editProductForm.value;

    // Agrega los valores al FormData
    formData.append('name', name);
    formData.append('description', description);
    formData.append('category', category);
    formData.append('price', price); // Convierte a cadena si es necesario
    formData.append('image', this.selectedFile!);

    this.adminActions.editProduct(this.id, formData).subscribe({
      next: (updatedProduct: Producto) => {
          console.log(updatedProduct)
      },
      error: (error:any) => {
        console.log(error)
      }
    })

  }
}

import { styled } from '@mui/material';
import MatxSidenav from 'app/components/MatxSidenav/MatxSidenav';
import MatxSidenavContainer from 'app/components/MatxSidenav/MatxSidenavContainer';
import MatxSidenavContent from 'app/components/MatxSidenav/MatxSidenavContent';
// import { MatxSidenav, ,  } from 'app/components/MatxSidenav';
import useBrands from 'app/hooks/useBrands';
import useCategory from 'app/hooks/useCategory';
import useProducts from 'app/hooks/useProducts';
import useRatings from 'app/hooks/useRatings';
import { debounce } from 'lodash';
import { useEffect, useState } from 'react';
import ShopContainer from './ShopContainer';
import ShopSidenav from './ShopSidenav';

const ShopRoot = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' }
}));

const Shop = () => {
  const [page, setPage] = useState(0);
  const [open, setOpen] = useState(true);
  const [query, setQuery] = useState('');
  const [view, setView] = useState('grid');
  const [brands, setBrands] = useState([]);
  const [shipping, setShipping] = useState(false);
  const [categories, setCategories] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(12);
  const [orderBy, setOrderBy] = useState('default');
  const [multilevel, setMultilevel] = useState('all');
  const [sliderRange, setSliderRange] = useState([0, 100]);
  const [filteredProductList, setFilteredProductList] = useState([]);

  const { ratings } = useRatings();
  const { products } = useProducts();
  const { brands: brandList } = useBrands();
  const { categories: categoryList } = useCategory();

  const toggleSidenav = () => setOpen(!open);

  const handleSliderChange = (_, newValue) => {
    setSliderRange(newValue);
    filterProductOnPriceRange(newValue[0] * 10, newValue[1] * 10);
  };

  const handleChangePage = (_, newPage) => setPage(newPage);

  const toggleView = (view) => setView(view);

  const handleSearch = (query) => {
    setQuery(query);
    search(query);
  };

  const search = debounce((query) => {
    let tempList = products.filter((product) =>
      product.title.toLowerCase().match(query.toLowerCase())
    );

    setFilteredProductList(tempList);
  }, 200);

  const handleMultilevelChange = (event) => {
    let eventValue = event.target.value;
    let range = eventValue.split(',');

    setMultilevel(eventValue);

    if (eventValue === 'all') {
      setFilteredProductList(products);
      return;
    }

    range = range.map((value) => parseInt(value));

    if (range.length === 2) {
      filterProductOnPriceRange(range[0], range[1]);
    } else {
      let tempList = products.filter((product) => product.price >= range[0]);
      setFilteredProductList(tempList);
    }
  };

  const handleCategoryChange = (event) => {
    let target = event.target;
    let tempCategories = [];
    if (target.checked) {
      tempCategories = [...categories, target.name];
    } else {
      tempCategories = categories.filter((item) => item !== target.name);
    }

    setCategories(tempCategories);
    setFilteredProductList(filterProductOnProperty('category', tempCategories));
  };

  const handleBrandChange = (event) => {
    let target = event.target;
    let tempBrands = [];
    if (target.checked) {
      tempBrands = [...brands, target.name];
    } else {
      tempBrands = brands.filter((item) => item !== target.name);
    }
    setBrands(tempBrands);
    setFilteredProductList(filterProductOnProperty('brand', tempBrands));
  };

  const handleRatingClick = (rate) => {
    setFilteredProductList(filterProductOnProperty('rating', [rate]));
  };

  const handleFreeShippingClick = () => {
    setShipping(!shipping);
    setFilteredProductList(filterProductOnProperty('freeShipping', [shipping]));
  };

  const filterProductOnProperty = (property, value = []) => {
    if (value.length === 0) {
      return products;
    }
    return products.filter((product) => value.includes(product[property]));
  };

  const filterProductOnPriceRange = (lowestPrice, highestPrice) => {
    let tempList = products.filter(
      (product) => product.price >= lowestPrice && product.price <= highestPrice
    );
    setFilteredProductList(tempList);
  };

  const handleClearAllFilter = () => {
    setSliderRange([0, 100]);
    setQuery('');
    setMultilevel('all');
    setShipping(false);
    setCategories([]);
    setBrands([]);
    setFilteredProductList(products);
  };

  useEffect(() => {
    setFilteredProductList(products);
  }, [products]);

  return (
    <ShopRoot className="shop">
      <MatxSidenavContainer>
        <MatxSidenav width="288px" open={open} toggleSidenav={toggleSidenav}>
          <ShopSidenav
            query={query}
            brands={brands}
            shipping={shipping}
            brandList={brandList}
            multilevel={multilevel}
            ratingList={ratings}
            categories={categories}
            sliderRange={sliderRange}
            categoryList={categoryList}
            handleSearch={handleSearch}
            toggleSidenav={toggleSidenav}
            handleBrandChange={handleBrandChange}
            handleRatingClick={handleRatingClick}
            handleSliderChange={handleSliderChange}
            handleCategoryChange={handleCategoryChange}
            handleClearAllFilter={handleClearAllFilter}
            handleMultilevelChange={handleMultilevelChange}
            handleFreeShippingClick={handleFreeShippingClick}
          />
        </MatxSidenav>

        <MatxSidenavContent>
          <ShopContainer
            view={view}
            page={page}
            orderBy={orderBy}
            toggleView={toggleView}
            rowsPerPage={rowsPerPage}
            toggleSidenav={toggleSidenav}
            productList={filteredProductList}
            handleChangePage={handleChangePage}
            handleChange={(e) => setOrderBy(e.target.value)}
            setRowsPerPage={(e) => setRowsPerPage(e.target.value)}
          />
        </MatxSidenavContent>
      </MatxSidenavContainer>
    </ShopRoot>
  );
};

export default Shop;

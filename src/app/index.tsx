import { CategoryButton } from '@/components/category-button'
import { Header } from '@/components/header'
import { CATEGORIES } from '@/utils/data/products'
import { useState } from 'react'
import { FlatList, View } from 'react-native'

export default function Home() {
  const [category, setCategory] = useState(CATEGORIES[0])

  return (
    <View className="flex-1 pt-8">
      <Header title="Faça seu pedido" cartQuantityItems={5} />

      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CategoryButton title={item} isSelected={category === item} onPress={() => setCategory(item)} />
        )}
        horizontal
        className="max-h-10 mt-5"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
      />
    </View>
  )
}

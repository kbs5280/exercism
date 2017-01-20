class ETL

  def self.transform(original)
    new = {}
    original.map do |key, values|
      values.each do |value|
        new_key = value.downcase
        new[new_key] = key
      end
    end
    new
  end
end
